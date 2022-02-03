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
            xcoord: props.xcoord,
            ycoord: props.ycoord
        }
    }
    
        

    render(){
        
        return (<span class = 'array' style = "right: "><h1> This is an array </h1></span>);
    }


}





export default Array;