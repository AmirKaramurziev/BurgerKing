import React from 'react';
import { Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap';
import axios from 'axios';
class DeleteProd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            form:{}
        }
    }
    deleteProd(object){
        this.setState({form:object})
    }
    dellSuccess(e){
        let _this = this;
        axios.post('/api/delete_product',{
            name:this.state.form.name,
            amount:this.state.form.amount,
            price:this.state.form.price
        })
        .then(function(res){console.log(res);
            _this.props.refresh();
            _this.props.toggle();
        })
        .catch(function(err){

        })
    }
    render(){
        return(
            <div>
                {this.props.modal === false?
                null:
                <div>
                    <Modal isOpen={this.props.modal} toggle={(e)=>this.props.toggle()}>
                        <ModalHeader toggle={(e)=>this.props.toggle()}>Вы действительно хотите удалить {this.state.form.name}?</ModalHeader>
                        <ModalFooter>
                            <Button onClick={(e)=>this.dellSuccess(e)} color="primary">удалить</Button>{' '}
                            <Button onClick={e=>this.props.toggle()} color="danger">отмена</Button>
                        </ModalFooter>
                    </Modal>
                </div>}
            </div>
        )
    }
}
export default DeleteProd;