/**
 * Created by robin on 15/3/17.
 */
import React,{Component} from 'react';
import './Style.css';

export default class InputData extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    changeHandler(event) {
        this.setState({
            text: event.target.value,
        })
    }

    addFruit (e) {
        e.preventDefault();
        this.props.addFruit(this.state.text);
        this.setState({text: ''})

    }

    render(){
        return(
        <div>
            <form onSubmit={this.addFruit.bind(this)} >
                <input
                    type="text"
                    className="txtbx"
                    placeholder="Enter item seperated with (-)hyphen"
                    onChange={this.changeHandler.bind(this)}
                    value={this.state.text}
                />&nbsp;&nbsp;&nbsp;&nbsp;
            </form>
        </div>
        )
    }
}