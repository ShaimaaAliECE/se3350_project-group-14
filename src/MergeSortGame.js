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
        
        let yoffset = []
        
        
        let halfStep = ((data.steps.length -2) /2);
        for (let i = 0; i < halfStep; i++ ){
            yoffset[i] = 10+i*110;
        }
        
        return data.stepNum.map((num) =>{
            let ycoord;
            let xdifference;
            
            //this switch will assign all yoffsets
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
            
            //this switch will assign all the x offsets from the middle of the screen.
            switch(num){
                case 0:
                case 27:
                    xdifference = 0;
                    break;
                case 1:
                case 13:
                    xdifference = -300; //rows 1, 7
                    break;
                case 2: //rows 2, 6
                case 5:    
                    xdifference = -450;
                    break;
                case 6:
                case 12:
                    xdifference = -150;
                    break;
                case 3: //row 2
                    xdifference = -525;
                    break;
                case 4: 
                    xdifference = -375;
                    break;
                case 7:
                    xdifference = -225;
                    break;
                case 8:
                    xdifference = -75;
                    break;
                case 9: 
                    xdifference = -125;
                    break;
                case 10:
                    xdifference = -25;
                    break;
                case 11:
                    xdifference = -75;
                    break;
                case 13:
                    xdifference = -300;
                    break;
                default:
                    xdifference = -960;
                    break;
                
            }


            return <Array indexes = {data.steps[num].length} values = {data.steps[num]} xcoord = {xdifference} ycoord = {ycoord} stepNum = {num} />
        });

    }
    

    render(){
        
        return (this.getArrays());
    }


}







export default MergeSortGame;