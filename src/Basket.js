/**
 * Created by robin on 15/3/17.
 */
import React,{Component} from 'react';
import './Style.css';

export default class Basket extends Component {

    render(){
        return(
            <table>
                {this.props.data.map((item,index) => (
                    <tr className="row" key={index}>
                        <td className="name">{item.fruit}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                        <td><input className="addrmv" type="button" value="+" onClick={() => {this.props.increment(index)}}/></td>
                        <td><input className="addrmv" type="button" value="-" onClick={() => {this.props.decrement(index)}}/></td>
                        <td><label>{item.qty * item.price}</label></td>
                        <td><input className="del" type="button" value="DEL" onClick={() => {this.props.remove(index)}}/></td>
                    </tr>
                ))}
            </table>
        )
    }
}
