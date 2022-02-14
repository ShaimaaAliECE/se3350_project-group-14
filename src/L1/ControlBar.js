import React from 'react';
import react, {useState} from "react";
import {sortArray} from "./mergesort.js";
import {showNext} from './PageHandler.js';


class ControlBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        

    }

    render(){
        return (
        <><h1>Mergesort Level 1</h1>
            <div className='tips'>
                Welcome to SortIt!<br></br>SortIt! will help you learn about important sorting algorithms used by Computer Scientists and Software Engineers.
            <br></br>To begin, click the <b>START</b> button.</div><div className='stepDescription'>

            </div>
            <div className='controls'> </div>
            <button id="startBtn" onClick={showNext}>Start</button></>
            
        );
    }

}

export default ControlBar;