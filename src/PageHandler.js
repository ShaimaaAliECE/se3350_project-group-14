import jquery from 'jquery';
let currentStep = 0;

let j = jquery();
export function showNext(){
    console.log(`Current step from page handler: ${currentStep}`);
    jquery(`#${currentStep++}`).css('display', 'inline');
}