let steps = []
let index = 0;
let tips = [];
//let sorted = sortArray(20); //this is what we use to create an array and sort it. This will also intialize the steps array.

/*
//this is purely test code, it just prints out each index.
for (let i = 0; i < sorted[0].length; i++){
    console.log(sorted[0][i]);                      THIS IS HOW YOU INDEX THE STEPS ARRAY
}
console.log(sorted[1]));    This is how you get the sorted array.
*/
let sorted = null;
let stepCount = 0;


export function sortArray(){
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline-block";
    let array = createArray(10);     //create an array with n random numbers
    steps = []; //initialize steps array to blank
    index = 0;  //init the counter 
    tips = [];
    let sortedArray = mergeSort(array)
    //determine the tips for the steps
    
    //create a JSON object and return that?
    let myJSON = {
        "steps": steps,
        "tips": tips,
        "finalStep": sortedArray
    };
    sorted = myJSON;
    printSorted();
    return myJSON;    //return the steps, and the sorted array
}

//now i need to figure out how to store the state... each time that mergesort is called we need to somehow store an image of the lists.
//maybe this is too complex. Maybe we should just nest hella for statements.

function printSorted() {
    console.log(sorted);
    for (let i = 0; i < sorted.steps.length; i++){
    console.log(`Step ${i}: ${sorted.steps[i]}\nDescription: ${sorted.tips[i]}\n----------------------------------------------------------------------------------`);
}
}

function createArray(n){
    let array = [];
    for (let i = 0; i < n; i++){
        array[i] = Math.floor(Math.random()*21);
    }
    return array;
}

function merge(arr1, arr2) {
    let sorted = [];
    let a1 = [];
    let a2 =[];
    
    for (let i = 0; i < arr1.length; i++){  //initialize some dummy arrays. Before these were implemented it would break our steps.
        a1[i] = arr1[i]
    }
    for (let i = 0; i < arr2.length; i++){
        a2[i] = arr2[i]
    }
    
    
    while (a1.length && a2.length) {    //while left and right have any length
      if (a1[0] < a2[0]) sorted.push(a1.shift()); //check the first elements, compare them, if left is less, remove it from arr1, add to front of sorted
      else sorted.push(a2.shift());       //else, remove arr2[0] from arr2, add to sorted
    };
    
    
    tips[index] = "Merge the values smallest to largest";
    stepBuilder(sorted.concat(a1.slice().concat(a2.slice())));  //add this as a step
    return sorted.concat(a1.slice().concat(a2.slice()));
}

function mergeSort(arr){

    if (arr.length >= 1){   //if there is anything in the array, add it as a step
        
        if (arr.length == 1){
            tips[index] = "A single number, this is ready to merge."
        }else{
            tips[index] = "Split the array";
        }

        stepBuilder(arr);
    }
    
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
    
    
    return merge(left, right);
}


function stepBuilder(step){
    steps[index] = step;    //create the steps
    index++;
}

function tipsBuilder(s){
    let top = s[0];

}

export function showStep() {
    let text = "";
    for (let i =0; i< sorted.steps[stepCount].length; i++) {
        text = text + sorted.steps[stepCount][i] + ",";
        console.log("Step "+ stepCount+": "+sorted.steps[stepCount][i]);
    }
    document.getElementById("tip").innerHTML = sorted.tips[stepCount];
    stepCount++;
    document.getElementById("step"+stepCount).innerHTML = text.substring(0,text.length-1);


}





