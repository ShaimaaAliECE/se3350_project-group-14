import React, { Component } from 'react';
import ArraySlot from './ArraySlot';
import ControlBar from './ControlBar';
export default class ArrayStep extends Component {
    constructor(props) {
        super(props);
        this.state = {slotsFilled: 0};
        this.changeCurrStepState = this.changeCurrStepState.bind(this);
        this.changeSlotsFilled = this.changeSlotsFilled.bind(this);
        this.changeLivesState = this.changeLivesState.bind(this);
    }

    changeSlotsFilled() {
        this.setState({
            slotsFilled: this.state.slotsFilled+1
        });
        this.props.changeFilledState();
    }

    changeCurrStepState = (currStep) => {
        this.props.changeCurrStepState(currStep);
    }

    changeLivesState() {
        this.props.changeLivesState();
    }
    render() {
        let arraySlots = [];

        for (let i = 0; i < this.props.size; i++) {
           arraySlots[i] = <ArraySlot space={i} value={this.props.values[i]} disabled={this.props.disabled} currStep={this.props.currStep} changeSlotsFilled={this.changeSlotsFilled} changeLivesState={this.changeLivesState}/>
        }
        
        let bar = "";
        if(this.props.step === this.props.currStep-1){
            bar = <ControlBar step={this.props.step} opt={this.props.opt} currStep={this.props.currStep} changeCurrStepState={this.changeCurrStepState} changeLivesState={this.changeLivesState}/>
        }
     
        return(
            <>
                <div id={"s" +this.props.step} className="step">
                {arraySlots.map(arraySl => (
                    <>{arraySl}</>
                ))}
                {bar}
                </div>
            </>
        );
    }
}