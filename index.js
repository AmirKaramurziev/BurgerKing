//импорт пакетов 
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
//задаем порт
const PORT = 2005;
//запуск сервера
const app = express();
//задаем использование пакетов на app
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
//подключение базы данных

//middlewares

//routes
app.get("/",(req,res)=>{

})


//подключение порта
app.listen(PORT ,(err)=>{
    if(err)console.log("hey", err);
    console.log("work on port:",PORT);
})