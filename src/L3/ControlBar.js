import React, { Component } from 'react';
import correct from './correct.mp3';
import incorrect from './incorrect.mp3';
import wow from './wow_.mp3';
import bruh from './bruh.mp3';

export default class ControlBar extends Component {
    constructor(props) {
        super(props);
        this.state = {splitClass: '', mergeClass: ''};
        this.checkButton = this.checkButton.bind(this);

    }

    checkButton(e) {
        if (e.target.id === "split" && this.props.opt.charAt(0) === 'S') {
            this.props.changeCurrStepState(this.props.currStep + 1);
             //new Audio(correct).play();
             new Audio(wow).play();
             this.setState({splitClass: 'correctBut'});
        }
        else if (e.target.id ==='merge') {
            if (this.props.opt.charAt(0) === 'A' || this.props.opt.charAt(0) === 'M') {
                this.props.changeCurrStepState(this.props.currStep + 1);
                 //new Audio(correct).play();
                 new Audio(wow).play();
                 this.setState({mergeClass: 'correctBut'});
            }
            else {
                //new Audio(incorrect).play();
                new Audio(bruh).play();
                this.setState({mergeClass: 'incorrectBut'});
                this.props.changeLivesState();
            }
        }
        else {
            //new Audio(incorrect).play();
            new Audio(bruh).play();
            this.setState({splitClass: 'incorrectBut'});
            this.props.changeLivesState();
        }
    }

    render() {
        let button = "";
        if (this.props.step === 1 || this.props.step === 2 || this.props.step === 5 || this.props.step === 6 || this.props.step === 8 || this.props.step === 11 || this.props.step === 12 || this.props.step === 13 || this.props.step === 14 || this.props.step === 15 || this.props.step === 18 || this.props.step === 19 || this.props.step === 21 || this.props.step === 24 || this.props.step === 14 || this.props.step === 25 || this.props.step === 26) {
            button = <div id={"c" + this.props.step} className='controls'>
                <button id='split' className={this.state.splitClass} onClick={this.checkButton}>Split</button>
                <button id='merge' className={this.state.mergeClass} onClick={this.checkButton}>Merge</button>
            </div>;
        }
        else {
            button = <div id={"c" + this.props.step} className='controls'>
                <button id='merge' className={this.state.mergeClass} onClick={this.checkButton}>Merge</button>
            </div>;
        }

        if (this.props.step === 27) {
            button = "";
        }

        if (this.props.step === 0) {
            button = <div id={"c" + this.props.step} className='controls'>
                <button id='split' className={this.state.splitClass} onClick={this.checkButton}>Split</button>
            </div>;
        }
        return (
            <>
                {button}
            </>
        );
    }
}