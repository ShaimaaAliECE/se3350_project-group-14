import React, { Component } from 'react';
import ArrayStep from './ArrayStep';
import {sortArray } from './mergesort';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {currStep: 1, sorted: sortArray(), lives: 2, filled: 0,  showLoseModal: false, showWinModal: false};
        this.changeCurrStepState = this.changeCurrStepState.bind(this);
        this.changeLivesState = this.changeLivesState.bind(this);
        this.changeFilledState = this.changeFilledState.bind(this);
        console.log(this.state.sorted)
    }

    changeCurrStepState = (currStep) => {
        this.setState({
            currStep: currStep
        });
    }

    
    changeLivesState() {
        this.setState({
            lives: this.state.lives-1
        });
        if (this.state.lives === 0) {
            this.setState({
                showLoseModal: true
            });
        }
    }

    restartLevel() {
        window.location.reload(false);
    }

    changeFilledState() {
        this.setState({
            filled: this.state.filled+1
        });
        if (this.state.filled === 67) {
            console.log("win!");
            this.setState({
                showWinModal: true
            })
        }
    }
    
    goToMenu() {
        window.location.href = '../';
    }

    render() {
        let size = this.props.size;
        let arrays = [];
        
        console.log(this.state.filled);

        arrays[0] = <ArrayStep size={this.state.sorted.steps[0].length} opt={this.state.sorted.tips[0]} step={0} values={this.state.sorted.steps[0]} currStep={this.state.currStep} disabled={true} changeCurrStepState={this.changeCurrStepState}/>

        
        for (let i = 1; i < this.state.currStep; i++) {
            arrays[i] = <ArrayStep size={this.state.sorted.steps[i].length} opt={this.state.sorted.tips[i]} step={i} currStep={this.state.currStep} values={this.state.sorted.steps[i]} changeCurrStepState={this.changeCurrStepState} changeLivesState={this.changeLivesState} changeFilledState={this.changeFilledState}/>
        }

        return(

            <>   
            <div id = 'main'>
                <h1>Mergesort Level 2</h1>
                <div id="steps">
                    <div id="heading">
                        Steps {this.state.currStep}/28
                    </div>
                    <div id="step">{this.state.sorted.tips[this.state.currStep-1]}</div>
                </div>
                <div id='wrapper'>
                {arrays.map(arraySt => (
                    <>{arraySt}</>
                ))}
                </div>
                <h2 className="lives">Lives: {this.state.lives+1}</h2>
                <Modal backdrop="static" keyboard={false} show={this.state.showLoseModal}>
                    <Modal.Header>
                    <Modal.Title>Game Over!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Would you like to try again?
                    </Modal.Body>
                    <Modal.Footer>
                        <button class="menu-btn" onClick={this.restartLevel}>Play Again</button>
                        <button class="menu-btn" onClick={this.goToMenu}>Return to Menu</button>
                    </Modal.Footer>
                </Modal>
                <Modal backdrop="static" keyboard={false} show={this.state.showWinModal}>
                    <Modal.Header>
                    <Modal.Title>Cogratulations!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    You beat the level!
                    </Modal.Body>
                    <Modal.Footer>
                        <button class="menu-btn" onClick={this.restartLevel}>Play Again</button>
                        <button class="menu-btn" onClick={this.goToMenu}>Return to Menu</button>
                    </Modal.Footer>
                </Modal>
            </div>
            </>
        );
    }
}