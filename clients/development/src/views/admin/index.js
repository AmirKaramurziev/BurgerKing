import React from 'react';
import NavigationBar from './components/navigation-bar';
import BurgersPage from './views/burgers';
import OrdersPage from './views/orders';
import ProductsPage from './views/products';
import UsersPage from './views/users';

class AdminPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showPage:"products"
        }
    }

    changeShowPage(pageName){
        this.setState({showPage:pageName})
    }

    render(){
        return(
            <div>
                <NavigationBar changeShowPage={this.changeShowPage.bind(this)}/>
                {this.state.showPage === "products"?<ProductsPage/>:null}
                {this.state.showPage === "orders"?<OrdersPage/>:null}
                {this.state.showPage === "burgers"?<BurgersPage/>:null}
                {this.state.showPage === "users"?<UsersPage/>:null}
            </div>
        )
    }
}
export default AdminPage;