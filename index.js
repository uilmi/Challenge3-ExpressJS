const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('index', {
        linkGame: "game"
    })
})

app.get('/game', (req, res) => {
    res.render('game', {
        back: "/",
        linkGame: "game"
    })
})


app.listen(port, () => {
    console.log(`The app is running on ${port}`);
});