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
    const gender = req.body.gender;
    const img = req.body.img;
    const uni = req.body.uni;
    const major = req.body.major;
    const bio = req.body.bio;
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (firstName, lastName, age, gender, img, uni, major, bio, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, age, gender, img, uni, major, bio, username, password], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send({username: username});
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

app.listen(8080, () => {
    console.log('server listening on port 8080');
})