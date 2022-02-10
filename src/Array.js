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
            xcoord: 700 + props.xcoord,
            ycoord: props.ycoord,
            step: props.stepNum
        }
    }
    
        

    render(){
        //check how many indexes there are, depending on that number we need to return a different number of input boxes
        console.log(`Values: ${this.state.values}`);
        return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord}}><p>{this.state.values}</p></span>);
    }


}





export default Array;