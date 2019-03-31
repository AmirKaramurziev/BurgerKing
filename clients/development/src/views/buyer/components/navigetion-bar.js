import React from 'react';
import {Navbar,Nav,NavItem,NavLink} from "reactstrap"
class NavUserBar extends React.Component{
    constructor(props){
        super(props)
    }
    //zakazi
    //sobery sam
    //menu
    //otzivi
    //log out
    render(){
        return(
            <div>
                <Navbar color="danger">
                    <Nav>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("orders")}>
                                orders
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("make")}>
                                make for yoursalfe
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("menu")}>
                                menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("comment")}>
                                comments
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink>
                                logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default NavUserBar;