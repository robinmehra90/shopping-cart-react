import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import InputData from './InputData';
import Basket from './Basket';
import CartTotal from './CartTotal';

class App extends Component {

    constructor() {
        super();

        this.state = {
            list: [],
            totalCost:0,
            inputValue: '',
        }
        this.addFruit = this.addItem.bind(this);
    }

    addItem (text) {

        const vld=/[a-zA-Z]-[0-9]/

        if(text.match(vld)) {
            console.log(text.match(vld))
            const {list} = this.state;
            var {totalCost}=this.state;

            const obj = {
                fruit: text.split('-')[0],
                price: text.split('-')[1],
                qty: 1,

            };
            totalCost += obj.price * obj.qty
            list.push(obj);
            this.setState({
                list,
                totalCost
            })
        }
        else
        {
            alert("Invalid input.Enter again")
            text=''

        }
    }

    incrementQty(index){
        var {totalCost}=this.state

        var temp = this.state.list
            temp[index].qty =  temp[index].qty + 1;
            this.setState({list:temp})

        totalCost += parseInt(this.state.list[index].price)
        this.setState({totalCost})
    }

    decrementQty(index){
        var {totalCost}=this.state

        var temp = this.state.list[index];
        if(temp.qty>1) {
            temp.qty =   this.state.list[index].qty - 1;
            this.setState({qty: temp.qty})
        }
        else
            return;

        totalCost -= parseInt(this.state.list[index].price)
        this.setState({totalCost})
    }

    removeItem(index){
        var {totalCost}=this.state
        totalCost -=parseInt((this.state.list[index].price)*(this.state.list[index].qty))
        this.setState({totalCost})

        var temp=this.state.list
        temp=this.state.list.filter((list,i)=>i!==index)
        this.setState({list:temp})
        }

  render() {
    return (
        <div className="main">
            <Title />
            <InputData addFruit={(value) => {this.addFruit(value)}} />
            <Basket data={this.state.list}
                  increment={(index)=>{this.incrementQty.bind(this)(index)}}
                  decrement={(index)=>{this.decrementQty.bind(this)(index)}}
                  remove={(index)=>{this.removeItem.bind(this)(index)}}/>
            <CartTotal totalValue={this.state.totalCost}/>
        </div>
    );
  }
}

export default App;
