const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1254',
        database: 'smart-brain'
    }
})



const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {res.send(database.users)});
app.post('/signin', (req, res) => {signin.signinHandler(req, res, db, bcrypt)});
app.post('/register', (req, res) => {register.registerHandler(req, res, db, bcrypt)});
app.delete('/profile/', (req, res) => {profile.profileHandler(db, req, res)});
app.put('/image', (req, res) => {image.imageHandler(req, res, db)});
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)});






app.listen(3001, () => {
    console.log('app is runing on port 3001');

})

/*
--> res - his is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userID --> GET = user
/image --> PUT --> user
*/