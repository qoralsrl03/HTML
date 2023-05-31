const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('start!!');
})

app.get('/', (req, res) => {
    res.render('computerWeb');
})

app.get('/Mainboard', function (req, res) {
    res.render('Mainboard'); // Mainboard.ejs 파일을 렌더링하여 응답으로 보냄
});

app.get('/CPU', function (req, res) {
    res.render('CPU'); //CPU.ejs 파일을 렌더링하여 응답으로 보냄
});

app.get('/RAM', function (req, res) {
    res.render('RAM'); //CPU.ejs 파일을 렌더링하여 응답으로 보냄
});

app.get('/Login', function (req, res) {
    res.render('Login'); //CPU.ejs 파일을 렌더링하여 응답으로 보냄
});