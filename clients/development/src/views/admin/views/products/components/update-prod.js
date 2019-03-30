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

class UpdateProd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            form:{
                _id:"",
                name:"",
                amount:"",
                price:"",
                discription:""
            },
        }
    }
    handleChange(e,index){
        let _form = this.state.form;
        _form[index] = e.target.value;
        this.setState({form:_form});
    }
    sayUpdate(object){
        this.setState({form:object})
    }
    UpdateProduct(e){
        let _this = this;
        axios.post('/api/update_prod',this.state.form)
        .then(function(res){
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
                        <ModalHeader toggle={(e)=>this.props.toggle()}>Редактирование продукта</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>название продукта</Label>
                                    <Input type="text" onChange={(e)=>this.handleChange(e,"name")} value={this.state.form.name}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>количество</Label>
                                    <Input type="number" onChange={(e)=>this.handleChange(e,"amount")} value={this.state.form.amount}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>цена</Label>
                                    <Input type="number" onChange={(e)=>this.handleChange(e,"price")} value={this.state.form.price}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>описание</Label>
                                    <Input type="textarea" onChange={(e)=>this.handleChange(e,"discription")} value={this.state.form.discription}/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e)=>this.UpdateProduct(e)} color="primary">поменять</Button>{' '}
                            <Button onClick={e=>this.props.toggle()} color="danger">отмена</Button>
                        </ModalFooter>
                    </Modal>
                </div>}
            </div>
        )
    }
}
export default UpdateProd;