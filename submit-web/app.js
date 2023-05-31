const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(port,()=>{
    console.log('start!!');
})

app.get('/',(req,res)=>{
    res.render('Mainboard');
})

app.get('/Mainboard.html', function(req, res) {
  res.render('Mainboard'); // Mainboard.ejs 파일을 렌더링하여 응답으로 보냄
});