
import React, { Component } from 'react';
import { showStep, sortArray } from './mergesort';
import './style.css';
export default class levelPage extends Component {
    render() {
        return (
            <>
            <h1><center>Merge Sort Game Tutorial</center></h1>
            <div className='controls'>
                <button id="startBtn" onClick={sortArray}>Start</button>
                <button id="nextBtn" style={{display: "none"}} onClick={showStep}>Next</button>
            </div>

            <div className='game'>
                <p id = 'tip'></p><br></br>
                <form className='steps'>
                    <p id='step1'></p>
                    <div>
                        <p id='step2'></p>
                        <p id='step15'></p>
                    </div>
                    <div>
                        <p id='step3'></p>
                        <p id='step7'></p>
                        <p id='step16'></p>
                        <p id='step20'></p>
                    </div>
                    <div>
                        <p id='step4'></p>
                        <p id='step5'></p>
                        <p id='step8'></p>
                        <p id='step9'></p>
                        <p id='step17'></p>
                        <p id='step18'></p>
                        <p id='step21'></p>
                        <p id='step22'></p>
                    </div>
                    <div>
                        <p id='step6'></p>
                        <p id='step10'></p>
                        <p id='step11'></p>
                        <p id='step19'></p>
                        <p id='step23'></p>
                        <p id='step24'></p>
                    </div>
                    <div>
                        <p id='step12'></p>
                        <p id='step25'></p>
                    </div>
                    <div>
                        <p id='step13'></p>
                        <p id='step26'></p>
                    </div>
                    <div>
                        <p id='step14'></p>
                        <p id='step27'></p>
                    </div>
                    <p id='step28'></p>
                </form>
            </div>
            </>
        );
    }
}

        