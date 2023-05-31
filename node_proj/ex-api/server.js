const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
const url = require('url');
const cors = require('cors');
// 특정 오리진 적용
app.use(cors({
    origin : 'http://127.0.0.1:5500'
}));
// 전체 적용
// app.user(cors());
app.get('/',async(req, res)=>{
    res.render('index');
})
app.get('/search', async(req, res)=>{
    console.log(req.query);
    const apiUrl = new url.URL('https://openapi.naver.com/v1/search/local');
    apiUrl.search = new url.URLSearchParams({
        query : req.query.query
        ,display : req.query.display
    }).toString();
    const reponse = await fetch(apiUrl, {
        method : 'GET'
        ,headers : {
            'X-Naver-Client-Id' : 'c21VfbRo7LeGmfIrQDwt',
            'X-Naver-Client-Secret' : 'i6qrBAGdyU',
            'Content-Type' : 'application/json'
        }
    });
    const data = await reponse.json();
    console.log(data)
    res.json(data);
});
app.listen(port, ()=>{
    console.log('start');
});