const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const salt = 9;
const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    first_name:String,
    last_name:String,
    password:String,
    address:String,
    role:{
        type:Number, // 1-админ
        default:2 // 2-пользователь
    }
})
const User = new mongoose.model("User",UserSchema);
module.exports = User;
//не сработала валидация, доделай пж
module.exports.register = (data,callback)=>{
    User.find({email:data.email,username:data.username,
    first_name:data.first_name,last_name:data.last_name,
    address:data.address},(err,founded)=>{
        //ошибка где то тут
        if(founded === []){
            bcrypt.hash(data.password, salt,(err,hash)=>{
                if(err)callback(err)
                else{
                    let userData = data;
                    userData.password = hash;
                    let newUser = new User(userData);
                    newUser.save(callback);
                }
            })
        }else{
            callback("oshibka");
        }
    })
    
}