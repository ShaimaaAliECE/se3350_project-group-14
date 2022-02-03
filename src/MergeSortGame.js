import React from "react";
import react, {useState} from "react";
import reactDom from "react-dom";
import {sortArray} from "./scripts/mergesort.js"

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
        
        
    }
    

    render(){
        
        return (<h1>Balls</h1>);
    }


}





export default MergeSortGame;