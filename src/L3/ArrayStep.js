import React, { Component } from 'react';
import ArraySlot from './ArraySlot';

export default class ArrayStep extends Component {
    render() {
        let arraySlots = [];

        for (let i =0; i < this.props.size; i++) {
           arraySlots[i] = <ArraySlot space={i} value={this.props.values[i]} disabled={this.props.disabled}/>
        }

        return(
            <>
                <div id={"s" +this.props.step} className="step">
                {arraySlots.map(arraySl => (
                    <>{arraySl}</>
                ))}
                </div>
            </>
        );
    }
}