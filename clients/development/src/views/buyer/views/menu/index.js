import React from 'react';
import axios from 'axios';
import './index.css'


import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter ,InputGroup, InputGroupAddon, Input  } from 'reactstrap';
class MenuPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productFromEx:[],
        }
    }
    get(){
        let _this = this;
        axios.get('/api/get_products')
        .then(function(res){    
            var burgers = res.data;
            burgers.forEach(e=>e.selectAmount = null)
            _this.setState({productFromEx:burgers})
        })
        .catch(function(err){

        })
    }
    componentDidMount(){
        this.get();
    }
    changeAmount(el,e){
        var _burgers = this.state.productFromEx;
        _burgers.forEach(burger=>{
            if(el._id == burger._id) {
                if(e.target.value>burger.amount)e.target.value = burger.amount;
                else burger.selectAmount = e.target.value
            };
        })
        this.setState({burger:_burgers})
    }
    render(){
        return(
            <div>
                <h1>OUR MENU</h1>
                <div className="container">
                    <div className="row">
                        {this.state.productFromEx.map((index)=>{
                            return(
                                <div class="col-3">
                                    <Card className="tomato">
                                        <CardImg top width="100%" src={require('./tomato.png')} />
                                        <CardBody>
                                            <CardTitle>{index.name}</CardTitle>
                                            <CardSubtitle>amount:{index.amount};{" "}price{index.price}</CardSubtitle>
                                            <CardText>discription:{" "}{index.discription}</CardText>
                                            <InputGroup>
                                                <Input placeholder="amount" type="number" onChange={(e)=>this.changeAmount(index,e)} value={index.selectAmount} max={index.amount}/>
                                                <InputGroupAddon addonType="append">{index.price * index.selectAmount}</InputGroupAddon>
                                            </InputGroup>
                                        </CardBody>
                                        <CardFooter>
                                            <Button color="primary">Buy</Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default MenuPage;