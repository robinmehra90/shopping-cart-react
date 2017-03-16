/**
 * Created by robin on 15/3/17.
 */
import React,{Component} from 'react';
import './Style.css';

export  default class CartTotal extends Component{
    render(){
        return(
            <div className="cartTot">
                <div>Total Cost :
                <span>{this.props.totalValue}</span></div>
            </div>
        )
    }

}