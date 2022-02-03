import React from "react";
import react, {useState} from "react";
import reactDom from "react-dom";
import {sortArray} from "./scripts/mergesort.js"

let data;

class Array extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indexes: props.indexes,
            values: props.values,
            xcoord: 960 + props.xcoord,
            ycoord: props.ycoord
        }
    }
    
        

    render(){
        //check how many indexes there are, depending on that number we need to return a different number of input boxes
        return (<span className = 'array' style = {{right: this.state.xcoord, top: this.state.ycoord}}><h1> This is an array </h1></span>);
    }


}





export default Array;