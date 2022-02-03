import React from 'react';
import ReactDOM from 'react-dom';
import react, {useState} from "react";
import {sortArray} from "./scripts/mergesort.js";
import Array from './Array';

let data;

class MergeSortGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: props.size,
            level: props.level,
            step: 0
        }
        
        this.startGame();

    }
    
    startGame(){
        data = sortArray(parseInt(this.state.size));
        console.log(data);
        //based on the number of steps, we have to create that many arrays, all with dif sizes

        this.getArrays();
        
    }

    getArrays(){
        //check data.steps
        //check the tips -> the tip can help us determine what to do next
        let ctr = 0;    //gonna be our counter
        let indexes = 0;  //size of array
        let xoff = 100;
        let yoff = [10, 110, 210, 310, 410, 510, 610, 710, 810]
        let row = 0;
        
        return data.steps.map((num) =>{
            row = Math.floor(Math.random()*9);
            xoff = xoff*-1;
            return <Array indexes = {data.steps[ctr].length} values = {data.steps[ctr++]} xcoord = {50 + xoff} ycoord = {yoff[row]} />
        });

    }
    

    render(){
        
        return (this.getArrays());
    }


}





export default MergeSortGame;