const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

;

const session = require("express-session")
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 3600 * 24 * 14 //two weeks, a fortnight
    }
}))

const msgCtrl = require('./messagesCtrl.js')
app.get('/api/messages', msgCtrl.getAllMessages)
app.post('/api/message', msgCtrl.createMessage)


const port = process.env.SERVER_PORT;
app.listen(port, () => console.log(`server running on port ${port}`))