const express = require('express');
const app = express();

const port = 3000;

let users = require('./db/users.json');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        linkGame: "/game"
    });
});

app.get('/game', (req, res) => {
    res.render('game', {
        back: "/",
        linkGame: "/game"
    });
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/login/:id', (req, res) => {
    const user = users.find((item) => {
        return item.id == req.params.id;
    });
    res.status(200).json(user);
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const lastItem = users[users.length - 1];
    const id = lastItem.id + 1;

    const user = {
        id: id,
        username: username,
        password: password
    }

    users.push(user);

    res.status(201).json(user);

});


app.listen(port, () => {
    console.log(`The app is running at http://localhost:${port}`);
});