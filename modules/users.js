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


const UserSchemaLogin = new mongoose.Schema({
    login:String,
    password:String
})
const UserLogin = new mongoose.model("UserLogin",UserSchemaLogin);
module.exports = UserLogin;


//не сработала валидация, доделай пж // заработало
module.exports.register = (data,callback)=>{
    User.find({email:data.email,username:data.username},(err,founded)=>{
        //ошибка где то тут // ошибки больше нету
        console.log(founded)
        if(founded == ""){
            console.log("as")
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
module.exports.login = (data,callback)=>{
    User.findOne({username:data.login},(err,founded)=>{
        if(err) return callback(err,null);  
        if(!founded) return callback(null,null);
        console.log(founded)
        if(founded){
            console.log("hallo")
            console.log(data,founded)
            bcrypt.compare(data.password,founded.password,(err,res)=>{
                if(err){
                    console.log(err);
                    return callback(err,null);
                } 
                if(res == true){
                    console.log("tr")
                    return callback(null,founded);
                } 
                if(res == false){
                    console.log("false")
                    return callback("password rigth emes",null);
                } 
            })
        }
    })
}