import React, { Component } from 'react';

import ArrayStep from './ArrayStep';
import {sortArray } from './mergesort';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {currStep: 1, sorted: sortArray(), showModal: false};
        this.changeCurrStepState = this.changeCurrStepState.bind(this);
        
    }

    changeCurrStepState = (currStep) => {
        this.setState({
            currStep: currStep
        });
        
        if (this.state.currStep >= 27){
            this.setState({
                showModal: true
            });
        }
    }

    restartLevel() {
        window.location.reload(false);
    }

    goToMenu() {
        window.location.href = '../';
    }

    nextLevel(){
        window.location.href = './L2'
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
            <div id = 'main'>
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
            </div>
                <Modal backdrop="static" keyboard={false} show={this.state.showModal}>
                    <Modal.Header>
                    <Modal.Title>Tutorial Complete!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    You have completed the tutorial! Good work.
                    </Modal.Body>
                    <Modal.Footer>
                        <button class="menu-btn" onClick={this.restartLevel}>Play Again</button>
                        <button class="menu-btn" onClick={this.nextLevel}>Next Level</button>
                        <button class="menu-btn" onClick={this.goToMenu}>Return to Menu</button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
