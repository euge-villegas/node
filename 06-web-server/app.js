require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.port;

//handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

//to serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Eugenia Villegas',
        title: 'Node JS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Eugenia Villegas',
        title: 'Node JS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Eugenia Villegas',
        title: 'Node JS'
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});





