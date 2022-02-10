import React, { Component } from "react";
import { showStep, sortArray } from "./mergesort";
import "./style.css";

export default class levelPage extends Component {
  render() {
    return (
      <div class="body">
        <h1>
          <center>Merge Sort Game Tutorial</center>
        </h1>
        <div className="controls">
          <button class="btn" id="startBtn" onClick={sortArray}>
            Start
          </button>
          <button class="btn" id="nextBtn" style={{ display: "none" }} onClick={showStep}>
            Next
          </button>
        </div>

        <div className="game">
          <p class= "help" id="tip"></p>
          <br></br>
          <form className="steps">   
           <div>
             <p className="numberHolder" id="step1"></p>
           </div>
            
            <div>
              <p className="numberHolder" id="step2"></p>
              <p className="numberHolder" id="step15"></p>
            </div>
            <div>
              <p className="numberHolder" id="step3"></p>
              <p className="numberHolder" id="step7"></p>
              <p className="numberHolder" id="step16"></p>
              <p className="numberHolder" id="step20"></p>
            </div>
            <div>
              <p className="numberHolder" id="step4"></p>
              <p className="numberHolder" id="step5"></p>
              <p className="numberHolder" id="step8"></p>
              <p className="numberHolder" id="step9"></p>
              <p className="numberHolder" id="step17"></p>
              <p className="numberHolder" id="step18"></p>
              <p className="numberHolder" id="step21"></p>
              <p className="numberHolder" id="step22"></p>
            </div>
            <div>
              <p className="numberHolder" id="step6"></p>
              <p className="numberHolder" id="step10"></p>
              <p className="numberHolder" id="step11"></p>
              <p className="numberHolder" id="step19"></p>
              <p className="numberHolder" id="step23"></p>
              <p className="numberHolder" id="step24"></p>
            </div>
            <div>
              <p className="numberHolder" id="step12"></p>
              <p className="numberHolder" id="step25"></p>
            </div>
            <div>
              <p className="numberHolder" id="step13"></p>
              <p className="numberHolder" id="step26"></p>
            </div>
            <div>
              <p className="numberHolder" id="step14"></p>
              <p className="numberHolder" id="step27"></p>
            </div>
            <p className="numberHolder" id="step28"></p>
          </form>
        </div>
      </div>
    );
  }
}
