//импорт пакетов 
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

const db_settings = require('./mongo-op.js')
const bodyParser = require('body-parser');
const app = express();
//задаем порт
const PORT = 2005;
//настройки сервера
mongoose.connect(db_settings.db_url_dev_mode, {useNewUrlParser: true});
mongoose.connect(db_settings.prodac, {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
//запуск сервера

//задаем использование пакетов на app
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
//подключение базы данных
//модели
const usermodul = require('./modules/users')
const productmodul = require('./modules/products')
//middlewares
const ValidMiddleWare = (req,res,next)=>{
    
}
//routes
//регистрация пользователя
app.post("/api/registration",(req,res)=>{
    usermodul.register(
        req.body,
            (err)=>{
                console.log(req.body)
                if(err){
                    return res.status(500).send(err);
                } else {res.status(200).send([{status:"success"}]);
            }     
        }
    )
})
app.post("/api/delete_product",(req,res)=>{
    console.log(req.body)
    productmodul.deleteProd(req.body,(err,products)=>{
        if(err)return res.status(500).send(err);
        else return res.status(200).send(products)
    })
})
app.post("/api/update_prod",(req,res)=>{
    productmodul.update(req.body,(err)=>{
        if(err){
            return res.status(500).send(err);
        }else{res.status(200).send({status:"success"})};
    })
})
app.post("/api/login",(req,res)=>{
    usermodul.login(
        req.body,(err,user)=>{
            if(err){
                return res.status(500).send(err);
            }else{res.status(200).send(user)};
        }
    )
})
app.get("/api/get_products",(req,res)=>{
    productmodul.getAll((err,products)=>{
        if(err)return res.status(500).send(err);
        else return res.status(200).send(products);
    })
})
//создание продуктов
app.post("/api/create_product",(req,res)=>{
    productmodul.add(req.body,(err)=>{
        if(err)return res.status(500).send(err);
        else return res.status(200).send({status:"success"})
    })
})
//подключение порта
app.listen(PORT ,(err)=>{
    if(err)console.log("hey", err);
    console.log("work on port:",PORT);
})