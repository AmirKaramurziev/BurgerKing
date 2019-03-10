import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./register.css"
import { Button } from 'reactstrap';
import axios from 'axios';
class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            form:{
                email:"",
                username:"",
                password:"",
                first_name:"",
                last_name:"",
                address:""
            }
        }
    }
    handleChange(e,type){
        var _form = this.state.form;
        _form[type] = e.target.value;
        this.setState({form:_form})
    }
    SuccessToRegist(e){
        let _this = this;
        e.preventDefault();
        axios.post('/api/registration',{
            email:this.state.form.email,
            username:this.state.form.username,
            password:this.state.form.password,
            first_name:this.state.form.first_name,
            last_name:this.state.form.last_name,
            address:this.state.form.address
        })
        .then(function(res){
            
        })
        .catch(function(err){

        })
    }
    render(){
        return(
            <div>
                Register Page
                <div className="imputGroup">
                    <InputGroup>
                        <Input value={this.state.form.email}      onChange={(e)=>this.handleChange(e,"email")}      placeholder="email" />
                    </InputGroup>
                    <InputGroup>
                        <Input value={this.state.form.username}   onChange={(e)=>this.handleChange(e,"username")}   placeholder="username" />
                    </InputGroup>
                    <InputGroup>
                        <Input value={this.state.form.password}   onChange={(e)=>this.handleChange(e,"password")}   placeholder="password" />
                    </InputGroup>
                    <InputGroup>
                        <Input value={this.state.form.first_name} onChange={(e)=>this.handleChange(e,"first_name")} placeholder="first_name" />
                    </InputGroup>
                    <InputGroup>
                        <Input value={this.state.form.last_name}  onChange={(e)=>this.handleChange(e,"last_name")}  placeholder="last_name" />
                    </InputGroup>
                    <InputGroup>
                        <Input value={this.state.form.address}    onChange={(e)=>this.handleChange(e,"address")}    placeholder="address" />
                    </InputGroup>
                    <Button onClick={(e)=>this.SuccessToRegist(e)} color="primary">success to regist</Button>
                </div>
            </div>
        )
    }
}
export default RegisterPage;