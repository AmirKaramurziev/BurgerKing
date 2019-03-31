import React from 'react';
import NavUserBar from './components/navigetion-bar';
import MenuPage from './views/menu'
import OrdersPage from './views/orders'
import CommentPage from './views/comments'
import MakeForYour from './views/make-for-yoursalfe'
class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showPage:"menu"
        }

    }
    changeShowPage(pageName){
        this.setState({showPage:pageName})
    }
    render(){
        return(
            <div>
                <NavUserBar changeShowPage={this.changeShowPage.bind(this)}/>
                {this.state.showPage === "menu"?<MenuPage/>:null}
                {this.state.showPage === "orders"?<OrdersPage/>:null}
                {this.state.showPage === "comment"?<CommentPage/>:null}
                {this.state.showPage === "make"?<MakeForYour/>:null}
            </div>
        )
    }
}
export default UserPage;