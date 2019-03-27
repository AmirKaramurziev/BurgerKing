import React from 'react';
import {Navbar, NavLink, Nav, NavItem} from 'reactstrap';
import "./nav.css";
class NavigationBar extends React.Component{

    render(){
        return(
            <div className="navigation">
                <Navbar color="warning">
                    <Nav>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("products")}>продукты</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("burgers")}>бургеры</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("users")}>пользователи</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={(e)=>this.props.changeShowPage("orders")}>заказы</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink>logout</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default NavigationBar;