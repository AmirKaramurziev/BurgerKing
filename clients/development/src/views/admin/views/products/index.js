import React from 'react';
import CreateNewProduct from './components/create-new-product';

import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import './index.css';
import axios from 'axios';
import UpdateProd from './components/update-prod';
import DeleteProd from './components/delete';
class ProductsPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modal:false,
            productsFromExpress:[],
            toEdit:{},
            shouUpModal:false,
            deleteModal:false,
        }
    }
    sonOfComponentDidMount(){
        let _this = this;
        axios.get('/api/get_products')
        .then(function(res){    
            console.log(res.data)
            _this.setState({productsFromExpress:res.data})
            this.toggleCrateModal();
        })
        .catch(function(err){

        })
    }
    componentDidMount(){
        this.sonOfComponentDidMount();
    }
    toggleCrateModal(e){
        let isOpen = this.state.modal;
        isOpen = !isOpen;
        this.setState({modal:isOpen});
    }
    toggleDeleteModal(e,object){
        let isOpen = this.state.deleteModal;
        isOpen = !isOpen;
        this.setState({deleteModal:isOpen});
        this.refs.deleteThis.deleteProd(object);
    }
    toggleUpdateModal(e,object){
        let isOpen = this.state.shouUpModal;
        isOpen = !isOpen;
        this.setState({shouUpModal:isOpen});


        this.refs.updateEdit.sayUpdate(object);
    }
    render(){
        return(
            <div>
                <DeleteProd ref="deleteThis" refresh={this.sonOfComponentDidMount.bind(this)} modal={this.state.deleteModal}  toggle={this.toggleDeleteModal.bind(this)}/>
                <CreateNewProduct refresh={this.sonOfComponentDidMount.bind(this)}  modal={this.state.modal}  toggle={this.toggleCrateModal.bind(this)}/> 
                <UpdateProd  ref="updateEdit" updateToEdit={this.state.toEdit}  modal={this.state.shouUpModal} toggle={this.toggleUpdateModal.bind(this)}/>
                <Button onClick={(e)=>this.toggleCrateModal(e)} color="primary">добаить продукт</Button>{' '}
                <div className="tableProd">
                    <Table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>amount</th>
                                <th>price</th>
                                <th>discription</th>
                                <th>options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.productsFromExpress.map((object)=>{
                                return(
                                    <tr>
                                        <td>{object.name}</td>
                                        <td>{object.amount}</td>
                                        <td>{object.price}</td>
                                        <td>{object.discription}</td>
                                        <td>
                                            <Button color="danger" onClick={(e)=>this.toggleDeleteModal(e,object)}>delete</Button>{" "}
                                            <Button colot="primery" onClick={(e)=>this.toggleUpdateModal(e,object)}>edit</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </Table>
                </div>
            </div>
        )
    }
}
export default ProductsPage;