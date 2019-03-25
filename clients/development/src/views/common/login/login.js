import React from 'react'
import axios from 'axios';
import "./login.css"
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputForm:{
                login:"",
                password:"",
                openHeaderSystem:false,
            }
        }
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
            _this.setState({openHeaderSystem:true})
        })
        .catch(function(err){

        })
    }
    render(){
        return(
            <div>
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
            </div>
        )
    }
}
export default Login;