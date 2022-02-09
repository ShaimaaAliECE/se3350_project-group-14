import React from "react";
import './JSAV'
import './Level1.css'
import $ from 'jquery';

class Level1 extends React.Component{
    componentDidMount(){
        function generateRandom(n, r1, r2) {
            let rand = [];
            for (let i = 0; i < n; i++) {
              let tmp = Math.floor( Math.random() * (r2 - r1) ) + r1;
              rand.push(tmp)
            }
            return rand;
          }
          
          function merge(mainArr, p1Arr, p2Arr) {
            let l = 0;
            let r = 0;
            let index = 0;
            while(l < p1Arr.size() && r < p2Arr.size()) {
                if(p1Arr.value(l) < p2Arr.value(r)){
                    mainArr.value(index, p1Arr.value(l));
                    l++;
                }else{
                    mainArr.value(index, p2Arr.value(r));
                    r++;
                }
                index++;
            }
            while(l < p1Arr.size()){
                mainArr.value(index, p1Arr.value(l));
                l++;
                index++;
            }
            while(r < p2Arr.size()){
                mainArr.value(index, p2Arr.value(r));
                r++;
                index++;
            }
          }
          
          let sampleArray = generateRandom(10, 0, 20);
          var jsav = new JSAV("av");
          
          var arr = jsav.ds.array(sampleArray);
          jsav.umsg('Created a random array')
          let left = 260;
        
          jsav.step();
    
        //creating sub array
        var arr2 = jsav.ds.array(sampleArray.slice(0, 5), {left: left});
        var arr3 = jsav.ds.array(sampleArray.slice(5, sampleArray.length), {left: left+400});
        jsav.umsg('Splitting the array into 2 half')
    
        jsav.step();
        //proceeding with left
        let arr4 = jsav.ds.array(sampleArray.slice(0, 3), {left: left-80, top: 150});
        let arr5 = jsav.ds.array(sampleArray.slice(3, 5), {left: left+170, top: 150});
        jsav.umsg('Proceeding with left, splitting first 5 elements of array.')
    
        jsav.step();
        let arr6 = jsav.ds.array(sampleArray.slice(0, 2), {left: left-150, top: 220})
        let arr7 = jsav.ds.array(sampleArray.slice(2, 3), {left: left+30, top: 220})
        let arr8 = jsav.ds.array(sampleArray.slice(3, 4), {left: left+150, top: 220})
        let arr9 = jsav.ds.array(sampleArray.slice(4, 5), {left: left+230, top: 220})
        jsav.umsg('Splitting the array more.')
        
        jsav.step();
        let arr10 = jsav.ds.array(sampleArray.slice(0, 1), {left: left-180, top: 300})
        let arr11 = jsav.ds.array(sampleArray.slice(1, 2), {left: left-100, top: 300})
        jsav.umsg('The split takes place until the array of size 1 is reached.')
        jsav.step();
    
        merge(arr6, arr10, arr11);
        arr10.hide()
        arr11.hide()
        jsav.umsg('Merged first 2 elements of the array by sorting.')
        jsav.step();
    
        merge(arr4, arr6, arr7);
        arr6.hide()
        arr7.hide()
        jsav.umsg('Merged first 3 elements of the array by sorting.')
        jsav.step();
        
        merge(arr5, arr8, arr9);
        arr8.hide()
        arr9.hide()
        jsav.umsg('Merged the 4th and 5th elements of the array by sorting.')
        jsav.step();
        
        merge(arr2, arr4, arr5);
        arr4.hide()
        arr5.hide()
        jsav.umsg('Merged first 5 elements of the array by sorting.')
        jsav.step();
    
        //proceeding with right
        left = 650
        let arr12 = jsav.ds.array(sampleArray.slice(5, 8), {left: left-80, top: 150});
        let arr13 = jsav.ds.array(sampleArray.slice(8, 10), {left: left+170, top: 150});
        jsav.umsg('Splitting the second half.')
    
        jsav.step();
        let arr14 = jsav.ds.array(sampleArray.slice(5, 7), {left: left-150, top: 220})
        let arr15 = jsav.ds.array(sampleArray.slice(7, 8), {left: left+30, top: 220})
        let arr16 = jsav.ds.array(sampleArray.slice(8, 9), {left: left+150, top: 220})
        let arr17 = jsav.ds.array(sampleArray.slice(9, 10), {left: left+230, top: 220})
        jsav.umsg('Splitting more.')
        
        jsav.step();
        let arr18 = jsav.ds.array(sampleArray.slice(5, 6), {left: left-180, top: 300})
        let arr19 = jsav.ds.array(sampleArray.slice(6, 7), {left: left-100, top: 300})
        jsav.umsg('The split takes place until the array of size 1 is reached.')
        jsav.step();
    
        merge(arr14, arr18, arr19);
        arr18.hide()
        arr19.hide()
        jsav.umsg('Merged 6th and 7th elements of the array by sorting.')
        jsav.step();
    
        merge(arr12, arr14, arr15);
        arr14.hide()
        arr15.hide()
        jsav.umsg('Merged 6th, 7th, & 8th elements of the array by sorting.')
        jsav.step();
        
        merge(arr13, arr16, arr17);
        arr16.hide()
        arr17.hide()
        jsav.umsg('Merged from 5th to 10th elements of the array by sorting.')
        jsav.step();
        
        merge(arr3, arr12, arr13);
        arr12.hide()
        arr13.hide()
        jsav.umsg('Merged the second half.')
        jsav.step();
    
        
        merge(arr, arr2, arr3);
        arr2.hide()
        arr3.hide()
        jsav.umsg('Merged both arrays.')
        jsav.step();
        jsav.umsg('Sorted Successfully.')
        jsav.step();
    
        jsav.recorded()
          //handle new style
          $(".jsavbegin").remove()
          $(".jsavend").remove()
          $(".jsavforward").text("Next")
          $(".jsavbackward").text("Previous")

    }

    render(){
        return(
            <>
                <center>
                    <h1>Merge Sort Game</h1>
                    <h2>Level - 01</h2>
                </center>
                <div id="av" style={{height: "600px"}}>
                    <div className="jsavcontrols"></div><span className="jsavcounter"></span><p className="jsavoutput jsavline"></p>
                </div>
                <div className="response">
                    <center><h3 style={{fontFamily: "Arial, Helvetica, sans-serif", color: "red", display: "none"}} id="error">Incorrect Number Selected</h3></center>
                </div>
            </>

        )
    }

}

export default Level1