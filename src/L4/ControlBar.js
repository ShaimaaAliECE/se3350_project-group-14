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
        if (this.props.step === 1 || this.props.step === 2 || this.props.step === 3 || this.props.step === 6 || this.props.step === 7 || this.props.step === 9 || this.props.step === 12 || this.props.step === 13 || this.props.step === 14 || this.props.step === 15 || this.props.step === 16 || this.props.step === 19 || this.props.step === 20 || this.props.step === 22 || this.props.step === 25 || this.props.step === 26 || this.props.step === 27 || this.props.step === 28 || this.props.step === 29 || this.props.step === 30 || this.props.step === 31 || this.props.step === 34 || this.props.step === 35 || this.props.step === 37 || this.props.step === 40 || this.props.step === 41 || this.props.step === 41 || this.props.step === 43 || this.props.step === 44 || this.props.step === 47 || this.props.step === 48 || this.props.step === 50 || this.props.step === 53 || this.props.step === 54 || this.props.step === 55 || this.props.step === 56) {
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

        if (this.props.step === 57) {
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