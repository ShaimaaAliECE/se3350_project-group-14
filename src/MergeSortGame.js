import React from 'react';
import ReactDOM from 'react-dom';
import react, {useState} from "react";
import {sortArray} from "./mergesort.js";
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
        
        let indexes = 0;  //size of array
        let xoff = 100;
        let yoffset = []
        
        
        let halfStep = ((data.steps.length -2) /2);
        for (let i = 0; i < halfStep; i++ ){
            yoffset[i] = 10+i*110;
        }
        
        return data.stepNum.map((num) =>{
            let ycoord;
            switch (num){
                case 1:
                case 14:
                    ycoord = yoffset[1];
                    break;
                case 2:
                case 6:
                case 15:
                case 19:
                    ycoord = yoffset[2];
                    break;
                case 3:
                case 4:
                case 7:
                case 8:
                case 16:
                case 17:
                case 20:
                case 21:
                    ycoord = yoffset[3];
                    break;
                case 9:
                case 10:
                case 22:
                case 23:
                    ycoord = yoffset[4];
                    break;
                case 11:
                case 24:
                    ycoord = yoffset[5];
                    break;
                case 5:
                case 12:
                case 18:
                case 25:
                    ycoord = yoffset[6];
                    break;
                case 13:
                case 26:
                    ycoord = yoffset[7];
                    break;
                case 27:
                    ycoord = yoffset[8];
                    break;
                default:
                    ycoord = yoffset[0];
                    break;

            }
            xoff = xoff*-1;
            return <Array indexes = {data.steps[num].length} values = {data.steps[num]} xcoord = {xoff} ycoord = {ycoord} />
        });

    }
    

    render(){
        
        return (this.getArrays());
    }


}





export default MergeSortGame;