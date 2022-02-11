import React from 'react';
import react, {useState} from "react";
import {sortArray} from "./mergesort.js";
import {showNext} from './PageHandler.js';


class ToolbarTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        

    }

    render(){
        return (<><h1><center>Merge Sort Game Tutorial</center></h1><div className='controls'>
            <button id="startBtn" onClick={showNext}>Start</button>
            
        </div></>);
    }

}

export default ToolbarTop;