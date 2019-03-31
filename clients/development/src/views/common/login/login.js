import React from 'react'
import axios from 'axios';
import "./login.css"
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import HeaderSystem from '../../header/header';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputForm:{
                login:"",
                password:"",
                openHeaderSystem:false,
                registPage:false,
                profileName:null,
                userRegistered:false,
                checking:false,
                error:null
            }
        }
    }
    componentDidMount(){
        var check = localStorage.getItem("Check")
    }
    handleChange(e,index){
        let _inputForm = this.state.inputForm;
        _inputForm[index] = e.target.value;
        this.setState({inputForm:_inputForm});
    }
    SuccessToRegist(e){
        let _this = this;
        e.preventDefault();
        axios.post('/api/login',{
            login:this.state.inputForm.login,
            password:this.state.inputForm.password
        })
        .then(function(res){
            // _this.setState({registPage:true})
            console.log(res.data);
            localStorage.setItem("_id",res.data._id)
            localStorage.setItem("username",res.data.username);
            localStorage.setItem("Check",true)
            localStorage.setItem("email",res.data.email);
            localStorage.setItem("first_name",res.data.first_name);
            localStorage.setItem("last_name",res.data.last_name)
            localStorage.setItem("role",res.data.role)
        })
        .catch(function(err){
            console.log("hh")
            if(err.response.status == 401){
                _this.setState({
                    error:":("
                })
            }
        })
    }
    render(){
        if(this.state.registPage==true){
            return <Redirect to="/profile"/>
        }
        return(
            <div>
                <HeaderSystem/>
                {/* {this.state.checking === false? */}
                <div className="inputGroup">
                    login page
                    <InputGroup>
                        <Input value={this.state.inputForm.login}      onChange={(e)=>this.handleChange(e,"login")}      placeholder="login" />
                    </InputGroup>
                    <InputGroup>
                        <Input value={this.state.inputForm.password}   onChange={(e)=>this.handleChange(e,"password")}   placeholder="password" />
                    </InputGroup>
                    <Button onClick={(e)=>this.SuccessToRegist(e)} color="primary">success to login</Button>
                    <Link to="register">
                        to register page
                    </Link>
                </div>
                {this.state.error}
                {/* :
                <div>
                    вы уже залогинны<br/>
                    если желаете выйти, то просто кликните на иконку вашего 
                    имени в правом верхнем углу
                </div>} */}
            </div>
        )
    }
}
export default Login;