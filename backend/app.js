import express from 'express';
import './sqlconnect';
import cors from 'cors';
import { getLoginStatus, login, logout } from './services/login';
import { signup } from './services/signup';
import { addCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } from './services/customers';
import { addContact, deleteContact, getContact, getContacts, updateContact } from './services/contacts';

const session = require('express-session');

const app = express();


app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());



app.listen(3000)
    console.log('yoni');


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/:userId', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
    });
});
function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}




app.get('/login', getLoginStatus);
app.get('/logout', logout);
app.post('/signup', signup);
app.post('/login', login);



app.get('/customers',authGurd, getCustomers);
app.get ('/customer/:id',authGurd, getCustomer);
app.post('/addcustomer',authGurd, addCustomer);
app.put ('/customers/:id',authGurd, updateCustomer)
app.delete('/customers/:id',authGurd, deleteCustomer);

app.get('/contacts',authGurd, getContacts);
app.get ('/contact/:id',authGurd, getContact);
app.post('/addcontact',authGurd, addContact);
app.put ('/contacts/:id',authGurd, updateContact)
app.delete('/contacts/:id',authGurd, deleteContact);