import React, { Component } from 'react';
import correct from './correct.mp3';
import incorrect from './incorrect.mp3';
import wow from './wow_.mp3';
import bruh from './bruh.mp3';

export default class ArraySlot extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', disabled: this.props.disabled, classN: "val"+this.props.space};

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleKeyDown(e) {
        if (e.key === 'Enter'|| e.key ==='Tab') {
            if (this.state.value.toString() == this.props.value.toString()) {
                //new Audio(correct).play();
                new Audio(wow).play();
                this.setState({disabled: true});
                this.props.changeSlotsFilled();
                this.setState({classN: "val"+this.props.space+" correct"});
            }
            else {
                //new Audio(incorrect).play();
                new Audio(bruh).play();
                this.setState({classN: "val"+this.props.space+" incorrect"});
                this.props.changeLivesState();
            }
        }
    }

    componentDidMount() {
        if (this.state.disabled === true) {
            this.setState({value: this.props.value});
        }
    }
    
    render() {
        return(
            <>
            <input type="text" maxlength="2" className={this.state.classN} value={this.state.value} disabled={this.state.disabled} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
            </>
        );
    }
}