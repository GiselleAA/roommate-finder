const express = require('express');
const app = express();
const cors  = require('cors');
const mysql = require('mysql');
const mime = require('mime-types');
const multer = require('multer');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: '50mb' }));

const db = mysql.createConnection({
    host: "sql9.freesqldatabase.com",
    user: "sql9610342",
    password: "QEcv7vMsNU",
    database:"sql9610342" 
})

module.exports = db;

/* need file system smh :(
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
    }
});

const upload = multer({ storage: storage });*/

app.post('/nav', (req, res) => {
    const id = req.body.id;
    db.query("SELECT img1 FROM users WHERE id = ? ", id, (err, result) => {
        if (err)
            console.log(err);
        if (result.length === 0)
            res.json({ data: 'false' });
        else {
            const imgData = result[0].img1;
            const base64String = Buffer.from(imgData).toString('base64');
            res.set('Content-Type');
            res.send(Buffer.from(base64String));
        }
    });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT id FROM users WHERE username = ? AND password = ? ", [username, password], (err, result) => {
        if (err)
            console.log(err);
        if (result.length === 0)
            res.json({ data: 'false' });
        else
            res.json({ data: result[0].id });
    })
})

app.post('/register', upload.single('img1'), (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const email = req.body.email;
    const gender = req.body.gender;
    const img1 = req.body.img1;
    const uni = req.body.uni;
    const major = req.body.major;
    const interest1 = req.body.interest1;
    const interest2 = req.body.interest2;
    const interest3 = req.body.interest3;
    const bio = req.body.bio;
    const username = req.body.username;
    const password = req.body.password;
    const location = req.body.location;


    db.query("INSERT INTO users (firstName, lastName, gender, age, email, img1, uni, major, bio, username, password, location, interest1, interest2, interest3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, gender, age, email, img1, uni, major, bio, username, password, location, interest1, interest2, interest3], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Username Taken" });
        }
        else 
            res.json({'data':'successful'});
    })
})

app.post('/profile', (req, res) => {
    const id = req.body.id;
    db.query("SELECT * FROM users WHERE id = ? ", [id], (err, result) => {
        if (err)
            console.log(err);
        else 
            res.json({ 
                firstName: result[0].firstName,
                lastName: result[0].lastName,
                age: result[0].age,
                gender: result[0].gender,
                img1: result[0].img1,
                uni: result[0].uni,
                major: result[0].major,
                bio: result[0].bio,
                job: result[0].job,
                location: result[0].location,
                horoscope: result[0].horoscope,
                religion: result[0].religion,
                orientation: result[0].orientation,
                minAge: result[0].minAge,
                minBudget: result[0].minBudget,
                stayLength: result[0].stayLength,
                amenities: result[0].amenities,
                pets: result[0].pets,
                guests: result[0].guests,
                parties: result[0].parties,
                sleep: result[0].sleep,
                homeTime: result[0].homeTime,
                cleanliness: result[0].cleanliness,
                study1: result[0].study1,
                smoker1: result[0].smoker1,
                drinker: result[0].drinker,
                trait1: result[0].trait1,
                music1: result[0].minAge,
                hostScout: result[0].hostScout,
                onCampus: result[0].onCampus
            });
    })
})

app.post('/settings', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const email = req.body.email;
    const gender = req.body.gender;
    const img1 = req.body.img1;
    const uni = req.body.uni;
    const major = req.body.major;
    const interest1 = req.body.interest1;
    const interest2 = req.body.interest2;
    const interest3 = req.body.interest3;
    const bio = req.body.bio;
    const username = req.body.username;
    const password = req.body.password;
    const trait1 = req.body.trait1;
    const trait2 = req.body.trait2;
    const trait3 = req.body.trait3;

    db.query("INSERT INTO users (firstName, lastName, age, email, gender, img1, uni, major, bio, username, password, interest1, interest2, interest3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, age, email, gender, img1, uni, major, bio, username, password, interest1, interest2, interest3], (err, result) => {
        if (err)
            console.log(err);
        else
            res.json({'data': 'successful'});
    })
})

app.post('/search', (req, res) => {
    const uni = req.body.uni;
    const major = req.body.major;
    
    const whereClause = Object.keys(req)
        .map(key => `${key} = ?`)
    .join(' AND ');

    const values = Object.values(req);

    db.query("SELECT id FROM users WHERE ${whereClause} ", values, (err, result) => {
        if (err)
            console.log(err);
        else if (result.length === 0)
            res.json({ data: 'false' });
        else {
            const ids = result.map(row => row.id);
            res.json({ data: ids });
        }
    })

    const id = req.body.id;
    db.query("SELECT * FROM users WHERE id = ? ", [id], (err, result) => {
        if (err)
            console.log(err);
        else 
            res.json({ 
                firstName: result[0].firstName,
                age: result[0].age,
                img1: result[0].img1,
                uni: result[0].uni,
                major: result[0].major,
                bio: result[0].bio
            });
    })
})


app.listen(8080, () => {
    console.log('server listening on port 8080');
})