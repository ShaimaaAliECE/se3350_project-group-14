import React, { Component } from 'react';
import ArrayStep from './ArrayStep';
import {sortArray } from './mergesort';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {currStep: 1, sorted: sortArray(20,50), lives: 2, filled: 0,  showLoseModal: false, showWinModal: false, timeSpent: 0, timer: ''};
        this.changeCurrStepState = this.changeCurrStepState.bind(this);
        this.changeLivesState = this.changeLivesState.bind(this);
        this.changeFilledState = this.changeFilledState.bind(this);
    }

    componentDidMount () {
        const currentSession = sessionStorage.getItem("session");

        if(!currentSession) {
            window.location.href = './Levels';
        }
        
        let timer = setInterval(() => {
            this.setState({
                timeSpent: this.state.timeSpent+1
            })
        }, 1000);
        this.setState({timer: timer});
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
            //axios for losing
            let session = sessionStorage.getItem("session");
            session = JSON.parse(session);
            let algo_id = 1;
            let level = 4;
            let status = "Loss";
            clearInterval(this.state.timer)
            console.log(this.state.timeSpent)
            axios.post('http://localhost:5000/create-analytics', 
                {
                    session_id: session.id,
                    algorithm_id: algo_id,
                    level: level,
                    status: status,
                    time_spent: this.state.timeSpent
                }
            ).then(function (response) {
                console.log(response.data)
            }).catch(err => console.log(err))

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
        if (this.state.filled === 175) {
            //axios for winning
            let session = sessionStorage.getItem("session");
            session = JSON.parse(session);
            let algo_id = 1;
            let level = 3;
            let status = "Win";
            clearInterval(this.state.timer)
            console.log(this.state.timeSpent)
            axios.post('http://localhost:5000/create-analytics', 
                {
                    session_id: session.id,
                    algorithm_id: algo_id,
                    level: level,
                    status: status,
                    time_spent: this.state.timeSpent
                }
            ).then(function (response) {
                console.log(response.data)
            }).catch(err => console.log(err))

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
            <div className='l4'>
            <div id = 'main'>
                <h1>Mergesort Level 4</h1>
                <div id='wrapper'>
                {arrays.map(arraySt => (
                    <>{arraySt}</>
                ))}
                </div>
                <h2 className="lives">Lives: {this.state.lives+1}</h2>
                <h2 className="lives" style={{ top: "unset", bottom: "2%" }}>Time (sec): {this.state.timeSpent}</h2>
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
                    <Modal.Title>Congratulations!</Modal.Title>
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
            </div>
            </>
        );
    }
}