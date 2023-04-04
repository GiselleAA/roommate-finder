const express = require('express');
const app = express();
const cors  = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection({
    host: "sql9.freesqldatabase.com",
    user: "sql9610342",
    password: "QEcv7vMsNU",
    database:"sql9610342" 
})

module.exports = db;

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

app.post('/register', (req, res) => {
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

    db.query("INSERT INTO users (firstName, lastName, age, email, gender, img1, uni, major, interest1, interest2, interest3, bio, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, age, email, gender, img1, uni, major, bio, interest1, interest2, interest3, username, password], (err, result) => {
        if (err)
            console.log(err);
        else
            res.json({'data': 'successful'});
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
    const [trait1, setTrait1] = req.body.trait1;
    const [trait2, setTrait2] = req.body.trait2;
    const [trait3, setTrait3] = req.body.trait3;

    db.query("INSERT INTO users (firstName, lastName, age, email, gender, img1, uni, major, bio, username, password, interest1, interest2, interest3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, age, email, gender, img1, uni, major, bio, username, password, interest1, interest2, interest3], (err, result) => {
        if (err)
            console.log(err);
        else
            res.json({'data': 'successful'});
    })
})

app.listen(8080, () => {
    console.log('server listening on port 8080');
})