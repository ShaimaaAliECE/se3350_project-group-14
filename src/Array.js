import React from "react";
import react, {useState} from "react";
import reactDom from "react-dom";


class Array extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Parent: props.coords,
            Size: props.size,
            StepName: props.step,
            Values: props.values,
            Index: 0,
            mergesort: props.mergesort
        }
    }


    

    render(){
        return (
            <h1>Balls</h1>
        );
    }

}


export default Array;