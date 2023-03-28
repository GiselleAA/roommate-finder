const express = require('express');
const app = express();
const cors  = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "gasoto",
    password: "1228",
    database:"roommate_finder" 
})

module.exports = db;

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send({username: username});
    })
})

app.post('/register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (firstName, lastName, username, password) VALUES (?, ?, ?, ?)", [firstName, lastName, username, password], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send({username: username});
    })
})

app.listen(8080, () => {
    console.log('server listening on port 8080');
})