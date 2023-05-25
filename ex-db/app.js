const express = require('express');
const oracledb = require('oracledb');
const app = express();

app.set('view engine','ejs');
//oracle 정보
const dbConfig={
    user :'java'
    ,password : 'oracle'
    ,connectString : '127.0.0.1:1521/XE'
}

app.length('/',async(req,res)=>{
    let conn;
    try{
        conn=await oracledb.getConnection(dbConfig);
        const result = await conn.execute(`SELECT * FROM employees`); //물결표 아래 문자 쓰면 줄 바뀌어도 문자열 이어짐
        res.render('index',{data:result.rows});
    }catch(err){
        console.log(err);
        res.status(500).send('error');
    }finally{
        if(conn){
            try{
                await conn.close();
            }catch(e){
                console.log(e);
            }
        }
    }
});
app.listen(3000, ()=>{
    console.log('start server');
});