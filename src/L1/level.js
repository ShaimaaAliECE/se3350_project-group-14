import React, { Component } from 'react';
import ArrayStep from './ArrayStep';
import {sortArray } from './mergesort';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {currStep: 1, sorted: sortArray()};
        this.changeCurrStepState = this.changeCurrStepState.bind(this);
   
    }

    changeCurrStepState = (currStep) => {
        this.setState({
            currStep: currStep
        });
    }


    render() {
        let size = this.props.size;
        let arrays = [];
        
        console.log(this.state.filled);

        arrays[0] = <ArrayStep size={this.state.sorted.steps[0].length} opt={this.state.sorted.tips[0]} step={0} values={this.state.sorted.steps[0]} currStep={this.state.currStep} disabled={true} changeCurrStepState={this.changeCurrStepState}/>

        
        for (let i = 1; i < this.state.currStep; i++) {
            arrays[i] = <ArrayStep size={this.state.sorted.steps[i].length} opt={this.state.sorted.tips[i]} step={i} currStep={this.state.currStep} values={this.state.sorted.steps[i]}  disabled={true} changeCurrStepState={this.changeCurrStepState} />
        }

        return(

            <>   
                <h1>Mergesort Level 1</h1>
                <div id="steps">
                    <div id="heading">
                        Hint: {this.state.currStep}
                    </div>
                    <div id="step">{this.state.sorted.tips[this.state.currStep-1]}</div>
                </div>
                <div id='wrapper'>
                {arrays.map(arraySt => (
                    <>{arraySt}</>
                ))}
                </div>
                
            </>
        );
    }
}
