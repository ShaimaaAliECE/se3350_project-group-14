import React from 'react';
import react, {useState} from "react";
import {showStep, sortArray} from "./mergesort.js";

class ControlBar extends React.Component{
    constructor(props){
        
 
        super(props);
        this.state = {splitClass: '', mergeClass: ''};
        this.checkButton = this.checkButton.bind(this);   

    }
    checkButton(e) {
        this.props.changeCurrStepState(this.props.currStep + 1);
    }

    render(){
        let button = "";
       
        if (this.props.step === 1 || this.props.step === 2 || this.props.step === 5 || this.props.step === 6 || this.props.step === 8 || this.props.step === 11 || this.props.step === 12 || this.props.step === 13 || this.props.step === 14 || this.props.step === 15 || this.props.step === 18 || this.props.step === 19 || this.props.step === 21 || this.props.step === 24 || this.props.step === 14 || this.props.step === 25 || this.props.step === 26) {
            button = <div id={"c" + this.props.step} className='controls'>
                <button id='split' className={this.state.splitClass} onClick={this.checkButton}>Next</button>
            </div>;
        }
    
        button = <div id={"c" + this.props.step} className='controls'>
            <button id='split' className={this.state.splitClass} onClick={this.checkButton}>Next</button>
        </div>;
        
        if (this.props.step ===27) {
            button = '';
        }
        return (
            <>
                 {button}
            </>
        );
    }

}

export default ControlBar;