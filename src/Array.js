import React from "react";
import react, {useState} from "react";
import reactDom from "react-dom";


let data;

class Array extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indexes: props.indexes,
            values: props.values,
            xcoord: 650 + props.xcoord,
            ycoord: props.ycoord,
            step: props.stepNum
        }
    }
    
    generateValues(){
        switch(this.state.indexes){
            case 1:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label>
                </span>);
                break;
            case 2:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label>
                </span>);
                break;
            case 3:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label>
                </span>);
                break;
            case 4:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label>
                </span>);
                break;
            case 5:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label><label>{this.state.values[4]}</label>
                </span>);
                break;
            case 6:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label>
                <label>{this.state.values[4]}</label><label>{this.state.values[5]}</label>
                </span>);
                break;
            case 7: 
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label>
                <label>{this.state.values[4]}</label><label>{this.state.values[5]}</label><label>{this.state.values[6]}</label>
                </span>);
                break;
            case 8:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label>
                <label>{this.state.values[4]}</label><label>{this.state.values[5]}</label><label>{this.state.values[6]}</label><label>{this.state.values[7]}</label>
                </span>);
                break;
            case 9:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label>
                <label>{this.state.values[4]}</label><label>{this.state.values[5]}</label><label>{this.state.values[6]}</label><label>{this.state.values[7]}</label>
                <label>{this.state.values[8]}</label>
                </span>);
                break;
            case 10:
                return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
                <label>{this.state.values[0]}</label><label>{this.state.values[1]}</label><label>{this.state.values[2]}</label><label>{this.state.values[3]}</label>
                <label>{this.state.values[4]}</label><label>{this.state.values[5]}</label><label>{this.state.values[6]}</label><label>{this.state.values[7]}</label>
                <label>{this.state.values[8]}</label><label>{this.state.values[9]}</label>
                </span>);
                break;
    
        }
        return (<span className = 'array' id = {this.state.step} style = {{left: this.state.xcoord, top: this.state.ycoord, display: 'none'}}>
        <p>{this.state.values}</p>
        </span>);
    }

    render(){
        //check how many indexes there are, depending on that number we need to return a different number of input boxes
        
        return (this.generateValues());
    }


}





export default Array;