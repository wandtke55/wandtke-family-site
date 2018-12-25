require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const helmet = require('helmet');
const app = express();
const auth = require('./routes/auth');
const bcrypt = require('bcrypt');

app.use( express.static( `${__dirname}/../build` ) );

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('Wandtke Family DB Connected')
    app.set('db', db)
})

app.use(bodyParser.json());
app.use(helmet());
app.use(
    session({
        secret: 'wandtkefamilyrules!!!!',
        resave: false,
        saveUninitialized: false
    })
)

//==========BCRYPT==========//
app.use('/auth', auth)
// app.get('/api/random', (req, res) => {
//     console.log(req.session.user)
//     res.status(200).send(req.session.user)
// })

//==========SOCKETS==========//
const io = require('socket.io')(app.listen(SERVER_PORT, () => console.log(`Wandtke Family Chillin On Port: ${SERVER_PORT}`)));

io.on('connection', () => {
    console.log('user connected')
})