import React from "react";
import './JSAV'
import './Prototype1.css'
import $ from 'jquery';

class Prototype1 extends React.Component {
    componentDidMount(){
        let sampleArray = [10, 13, 99, 25, 30, 9, 4, 89];
    var jsav = new JSAV("av");
    
    var arr = jsav.ds.array(sampleArray);
    jsav.step(); // add new step
    

    //creating empty structure
    let midPoint = Math.round(sampleArray.length/2);
    let earr1 = Array(midPoint).fill('')
    let earr2 = Array(sampleArray.length - midPoint).fill('');
    var arr2 = jsav.ds.array(earr1, {left: 100});
    var arr3 = jsav.ds.array(earr2, {right: 100});
    
    
    jsav.step();
    arr2.highlight(0)

    // arr.click(function(index){

    // })

    arr.click(index => {
      if(index >= midPoint){ //check in arr3
        console.log(index)
        //get highlighted
        let highlightedIndex = -1;
        // console.log(arr2.isHighlight(0))
        
        for (let i = 0; i < earr2.length; i++) {
          if (arr3.isHighlight(i)){
            highlightedIndex = i;
            break;
          }
        }
        if(highlightedIndex+midPoint == index){
          arr3.value(highlightedIndex, sampleArray[index])
          arr3.unhighlight(highlightedIndex)
          //highlight next
          if(highlightedIndex+1 < sampleArray.length){
            arr3.highlight(highlightedIndex+1)
          }
          
        }else{
          $("#error").show()
          setTimeout(() => {
            $("#error").hide()
          }, 1000);
        }
        
      }else{ // check in arr2
        //get highlighted
        let highlightedIndex = -1;
        // console.log(arr2.isHighlight(0))
        
        for (let i = 0; i < earr1.length; i++) {
          if (arr2.isHighlight(i)){
            highlightedIndex = i;
            break;
          }
        }
        if(highlightedIndex == index){
          arr2.value(index, sampleArray[index])
          arr2.unhighlight(index)
          //highlight next
          if(index+1 >= midPoint){
            arr3.highlight(0)
          }else{
            arr2.highlight(index+1)
          }
          
        }else{
          $("#error").show()
          setTimeout(() => {
            $("#error").hide()
          }, 1000);
        }
      }
    });
    jsav.step();
    

    jsav.recorded()
      //handle new style
      $(".jsavbegin").remove()
      $(".jsavend").remove()
      $(".jsavforward").text("Next")
      $(".jsavbackward").text("Previous")
    }
    render(){
        return (
            <>
                <center><h1>Merge Sort Game</h1></center>
                <div id="av">
                  <div className="jsavcontrols"></div><span className="jsavcounter"></span>
                </div>
                <div className="response">
                  <center><h3 style={{fontFamily: "Arial, Helvetica, sans-serif", color: "red", display: "none"}} id="error">Incorrect Number Selected</h3></center>
                </div>
            </>
        );
    }
}

export default Prototype1;