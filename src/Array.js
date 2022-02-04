import React from "react";
import react, {useState} from "react";
import reactDom from "react-dom";
import {sortArray} from "./mergesort.js"

let data;

class Array extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indexes: props.indexes,
            values: props.values,
            xcoord: 960 + props.xcoord,
            ycoord: props.ycoord,
            step: props.stepNum
        }
    }
    
        

    render(){
        //check how many indexes there are, depending on that number we need to return a different number of input boxes
        return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord}}><h2> This is an array </h2></span>);
    }


}





export default Array;