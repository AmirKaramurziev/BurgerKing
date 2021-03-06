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
class CreateNewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            form:{
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
    addProduct(e){
        let _this = this;
        e.preventDefault();
        axios.post('/api/create_product',{
            name:this.state.form.name,
            amount:this.state.form.amount,
            price:this.state.form.price,
            discription:this.state.form.discription
        })
        .then(function(res){
            console.log(res.data)
            _this.props.toggle();
            _this.props.refresh();
        })
        .catch(function(err){

        })
    }
    componentDidMount(e){
    }
    render(){
        return(
            <div>
                <Modal isOpen={this.props.modal} toggle={(e)=>this.props.toggle()}>
                    <ModalHeader toggle={(e)=>this.props.toggle()}>Создание продукта</ModalHeader>
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
                        <Button onClick={(e)=>this.addProduct(e)} color="primary">создать</Button>{' '}
                        <Button onClick={e=>this.props.toggle()} color="danger">отмена</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
export default CreateNewProduct;