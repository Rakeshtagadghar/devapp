const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.
    connect(db, { useNewUrlParser: true })
    .then(() =>  console.log('mongoDB connected'))
    .catch(err => console.log(err))

app.get('/',(req,res) => res.send('hello'));

//use routes
app.use('/api/users',users)
app.use('/api/users',profile)
app.use('/api/users',posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server running on port 5000'));