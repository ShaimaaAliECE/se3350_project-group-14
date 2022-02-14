import React, { Component } from 'react';
import ArrayStep from './ArrayStep';
import {sortArray } from './mergesort';


export default class Level extends Component {
    render() {
        let size = this.props.size;
        let steps  = (size -1) * 3 +1;
        let arrays = [];
        let sorted  = sortArray();

        arrays[0] = <ArrayStep size={sorted.steps[0].length} step={0} values={sorted.steps[0]} disabled={true}/>

        for (let i =1; i < steps; i++) {
            arrays[i] = <ArrayStep size={sorted.steps[i].length} step={i} values={sorted.steps[i]} disabled = {true}/>
        }

        return(

            <>   
                <h1>Mergesort Level 3</h1>
                {arrays.map(arraySt => (
                    <>{arraySt}</>
                ))}
            </>
        );
    }
}