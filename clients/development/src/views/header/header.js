import React from 'react';
import "./header.css"
class HeaderSystem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            regChecking:false,
            username:"",
            userOptions:false,
        }
    }
    componentDidMount(){
        var check = localStorage.getItem("Check");
        var name = localStorage.getItem("username");
        this.setState({regChecking:check});
        this.setState({username:name});

    }
    userOptions(e){
        var useropi = this.state.userOptions;
        useropi = !useropi
        this.setState({userOptions:useropi})
    }
    render(){
        return(
            <div className="header-bar">
                <div className="logotype">
                    <p>
                        BURGER KING  :D
                    </p>
                </div>
                <div className="links">
                    <p>something</p>
                    <p>something</p>
                    <p>something</p>
                </div>
                <div className="username">
                    {this.state.regChecking===false?
                    null:
                    <div onClick={(e)=>this.userOptions(e)}>
                        {this.state.username}
                    </div>}
                    {this.state.userOptions===false?
                    null:
                    <div onClick={(e)=>this.userOptions(e)} className="userOpi">
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}
export default HeaderSystem;