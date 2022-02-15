//use either JQUERY or just document selector. IDC
import jquery from 'jquery';
let currentStep = 0;
//how to use JQUERY
//jquery('.className') or jquery('#idName')
//jquery('selection').text('new text goes here')



export function showNext(){
    console.log(`I would show next but I can't yet.`);
    jquery('#idname').css('display', 'inline-block');
    jquery(`#s${currentStep}`).css('display', inline)
}

export function startGame(){
    console.log("Game is now starting! Removing all items with ID: startBtn");
    jquery('#startBtn').remove();
    jquery('.tips').text(`We just updated the text`);
}