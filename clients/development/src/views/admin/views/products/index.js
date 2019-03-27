import React from 'react';
import CreateNewProduct from './components/create-new-product';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import './index.css';
import axios from 'axios';
class ProductsPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modal:false,
            productsFromExpress:[]
        }
    }
    componentDidMount(){
        let _this = this;
        axios.get('/api/get_products')
        .then(function(res){    
            console.log(res.data)
            _this.setState({productsFromExpress:res.data})
        })
        .catch(function(err){

        })
    }
    toggleCrateModal(e){
        let isOpen = this.state.modal;
        isOpen = !isOpen;
        this.setState({modal:isOpen});
    }
    render(){
        return(
            <div>
                <CreateNewProduct modal={this.state.modal}  toggle={this.toggleCrateModal.bind(this)}/> 
                <Button onClick={(e)=>this.toggleCrateModal(e)} color="primary">добаить продукт</Button>{' '}
                <div className="tableProd">
                    <Table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>amount</th>
                                <th>price</th>
                                <th>discription</th>
                            </tr>
                        </thead>
                        {this.state.productsFromExpress.map((object)=>{
                            return(
                                <tbody>
                                    <tr>
                                        <td>{object.name}</td>
                                        <td>{object.amount}</td>
                                        <td>{object.price}</td>
                                        <td>{object.discription}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </Table>
                </div>
            </div>
        )
    }
}
export default ProductsPage;