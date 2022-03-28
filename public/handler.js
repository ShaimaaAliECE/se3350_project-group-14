let steps = [];
let count = 0;

$('#a1').val('15');
$('#a2').val('7');
$('#a3').val('');
$('#a4').val('');
$('#a5').val('');
$('#a6').val('');
$('#a7').val('');
$('#a8').val('');
$('#a9').val('');
$('#a10').val('');
$('#a11').val('');
$('#a12').val('');
$('#a13').val('');
$('#a14').val('');
$('#a15').val('');
$('#a16').val('');
$('#a17').val('');
$('#a18').val('');
$('#a19').val('');
$('#a20').val('');
$('#a21').val('');
$('#a22').val('');

function level1(){
    console.log('you clicked me. Ouch!');
    window.location.href = 'L1';
}

function hello(){
  
    count++;
    switch(count){
        case 1:
            $('#hint').text(`The sorting begins when we have 2 numbers completely isolated. At this point, we have already split the array until we can't anymore. You will see an example in greater detail in level 1.`);
            $('#a1').show();
            $('#a2').show()
            break;
        case 2: 
            $('#hint').text(`We compare these 2 numbers. The smaller number will be placed in the first index of the merged array.`);
            $('#a1').addClass('comparing');
            $('#a2').addClass('comparing');
            $('#a3').show();
            $('#a4').show();
            break;
        case 3:
            $('#hint').text(`7 is smaller than 15... `);
            $('#a1').addClass('comparing');
            $('#a2').addClass('comparing');
            break;
        case 4:
            $('#hint').text(`7 is smaller than 15... so 7 is placed in the first index of the merged array.`);
            $('#a1').removeClass('comparing');
            $('#a2').removeClass('comparing');
            $('#a3').val('7');
            $('#a3').show();
            $('#a2').addClass('comparing-1');
            $('#a3').addClass('comparing-1');
            break;
        case 5:
            $('#hint').text(`Now we compare 15 to... nothing!`);
            $('#a2').removeClass('comparing-1');
            $('#a2').addClass('comparing');
            $('#a2').val('X');
            $('#a3').removeClass('comparing-1');
            $('#a1').addClass('comparing');
            break;
        case 6:
            $('#hint').text(`So 15 must go in the next index of the merged array.`);
            $('#a2').removeClass('comparing');
            $('#a1').removeClass('comparing');
            $('#a1').addClass('comparing-2');
            $('#a4').addClass('comparing-2');
            $('#a4').val('15');
            break;
        case 7:
            $('#hint').text(`How can we merge arrays that have more than 1 value?`);
            $('#a2').val('7');
            $('#a1').removeClass('comparing-2');
            $('#a4').removeClass('comparing-2');
            break;
        case 8:
            $('#hint').text(`Lets find out! The previous example is the base for a mergesort. We split the array until we can't anymore, and then compare the 2 single values and fill the 'merged' array. Now, we will see happens when we merge 2 arrays that both contain 2 values.`);
            break;
        case 9:
            $('#hint').text(`First, we compare the values in the first index of both merged arrays.`);
            $('#a5').show();
            $('#a6').show();
            $('#a5').val('4');
            $('#a6').val('8');
            $('#note1').show();
            $('#a3').addClass('comparing');
            $('#a5').addClass('comparing');
            break;
        case 10:
            $('#hint').text(`4 is less than 7, so 4 is the first index of the merged array.`);
            $('#a7').show();
            $('#a8').show();
            $('#a9').show();
            $('#a10').show();
            $('#note1').remove();
            $('#a3').removeClass('comparing');
            $('#a5').removeClass('comparing');
            $('#a5').addClass('comparing-1');
            $('#a7').addClass('comparing-1');
            $('#a7').val('4');
            break;
        case 11:
            $('#hint').text(`Now we will compare 7 to 8! 4 has already been accounted for, so we ignore it.`);
            $('#a5').removeClass('comparing-1');
            $('#a7').removeClass('comparing-1');
            $('#a5').val('X');
            $('#a3').addClass('comparing-2');
            $('#a6').addClass('comparing-2');
            break;
        case 12:
            $('#hint').text(`7 is less than 8, so 7 will go into the second index of the merged array.`);
            $('#a6').removeClass('comparing-2');
            $('#a3').removeClass('comparing-2');
            $('#a3').addClass('comparing');
            $('#a8').addClass('comparing');
            $('#a8').val('7');
            break;
        case 13:
            $('#hint').text(`Now that 7 is accounted for, we can ignore it!`);
            $('#a3').val('X');
            $('#a3').removeClass('comparing');
            $('#a8').removeClass('comparing');
            break;
        case 14:
            $('#hint').text(`Compare values 15 and 8.`);
            $('#a4').addClass('comparing-1');
            $('#a6').addClass('comparing-1');
            break;
        case 15:
            $('#hint').text(`8 is less than 15, so 8 goes in the next index of the merged array.`);
            $('#a4').removeClass('comparing-1');
            $('#a6').removeClass('comparing-1');
            $('#a6').addClass('comparing');
            $('#a9').addClass('comparing');
            $('#a9').val('8');
            break;
        case 16:
            $('#hint').text(`15 is the only number left. It must go in the final index of the merged array.`);
            $('#a6').removeClass('comparing');
            $('#a9').removeClass('comparing');
            $('#a6').val('X');
            $('#a10').val('15');
            $('#a10').addClass('comparing-2');
            $('#a4').addClass('comparing-2');
            break;
        case 17:
            $('#hint').text(`And that's it! This is our resulting merged array. We will now merge with another array that contains 4 values.`);
            $('#a10').removeClass('comparing-2');
            $('#a4').removeClass('comparing-2');
            $('#a3').val('7');
            $('#a5').val('4');
            $('#a6').val('8');
            break;
        case 18:
            $('#hint').text(`We start how we have in every other situation; by comparing the first index of each array.`);
            $('#a11').show();
            $('#a12').show();
            $('#a13').show();
            $('#a14').show();
            $('#a11').val('1');
            $('#a12').val('12');
            $('#a13').val('17');
            $('#a14').val('18');
            $('#a11').addClass('comparing');
            $('#a7').addClass('comparing');
            $('#a15').show();
            $('#a16').show();
            $('#a17').show();
            $('#a18').show();
            $('#a19').show();
            $('#a20').show();
            $('#a21').show();
            $('#a22').show();
            break;
        case 19:
            $('#hint').text(`1 is smaller than 4, so 1 goes into the first index.`);
            break;
        case 20:
            $('#a15').val('1');
            $('#a11').removeClass('comparing');
            $('#a7').removeClass('comparing');
            $('#a11').addClass('comparing-1');
            $('#a15').addClass('comparing-1');
            break;
        case 21:
            $('#hint').text(`Next we compare 4 and 12.`);
            $('#a11').val('X');
            $('#a11').removeClass('comparing-1');
            $('#a15').removeClass('comparing-1');
            $('#a7').addClass('comparing-2');
            $('#a12').addClass('comparing-2');
            break;
        case 22:
            $('#hint').text(`4 is smaller, so 4 goes into the next location.`);
            $('#a7').removeClass('comparing-2');
            $('#a12').removeClass('comparing-2');
            $('#a7').addClass('comparing');
            $('#a16').addClass('comparing');
            $('#a16').val('4');
            break;
        case 23:
            $('#hint').text(`Next we compare 7 and 12.`);
            $('#a7').val('X');
            $('#a7').removeClass('comparing');
            $('#a16').removeClass('comparing');
            $('#a8').addClass('comparing-1');
            $('#a12').addClass('comparing-1');
            break;
        case 24:
            $('#hint').text(`7 is less than 12, so 7 goes into the next location.`);
            $('#a12').removeClass('comparing-1');
            $('#a17').addClass('comparing-1');
            $('#a17').val('7');
            break;
        case 25:
            $('#hint').text(`Compare values 8 and 12.`);
            $('#a17').removeClass('comparing-1');
            $('#a8').removeClass('comparing-1');
            $('#a8').val('X');
            $('#a9').addClass('comparing-2');
            $('#a12').addClass('comparing-2');
            break;
        case 26:
            $('#hint').text(`8 is smaller than 12. 8 is added to the merged array.`);
            $('#a12').removeClass('comparing-2');
            $('#a18').addClass('comparing-2');
            $('#a18').val('8');
            break;
        case 27:
            $('#hint').text(`Compare 15 and 12.`);
            $('#a9').removeClass('comparing-2');
            $('#a18').removeClass('comparing-2');
            $('#a9').val('X');
            $('#a10').addClass('comparing');
            $('#a12').addClass('comparing');
            break;
        case 28:
            $('#hint').text(`12 is smaller. Let's add it to the sorted array.`);
            $('#a10').removeClass('comparing');
            $('#a19').addClass('comparing');
            $('#a19').val('12');
            break;
        case 29:
            $('#hint').text(`Compare 15 and 17.`);
            $('#a19').removeClass('comparing');
            $('#a12').removeClass('comparing');
            $('#a12').val('X');
            $('#a10').addClass('comparing-1');
            $('#a13').addClass('comparing-1');
            break;
        case 30:
            $('#hint').text(`15 is smaller than 17, so 15 goes to the sorted array.`);
            $('#a13').removeClass('comparing-1');
            $('#a20').addClass('comparing-1');
            $('#a20').val('15');
            break;
        case 31:
            $('#hint').text(`Compare 17 with... nothing!`);
            $('#a20').removeClass('comparing-1');
            $('#a10').removeClass('comparing-1');
            $('#a10').val('X');
            $('#a13').addClass('comparing-2');
            break;
        case 32:
            $('#hint').text(`17 is added next!`);
            $('#a21').addClass('comparing-2');
            $('#a21').val('17');
            break;
        case 33:
            $('#hint').text(`Finally, we have our last value! 18 is compared to... nothing!`);
            $('#a13').removeClass('comparing-2');
            $('#a13').val('X');
            $('#a21').removeClass('comparing-2');
            $('#a14').addClass('comparing');
            break;
        case 34:
            $('#hint').text(`18 is added to our array.`);
            $('#a22').addClass('comparing');
            $('#a22').val('18');
            break;
        case 35:
            $('#hint').text(`We have successfully sorted the array! Now go on to level 1!`);
            $('#a22').removeClass('comparing');
            $('#a14').removeClass('comparing');
            $('#a7').val('4');
            $('#a8').val('7');
            $('#a9').val('8');
            $('#a10').val('15');
            $('#a11').val('1');
            $('#a12').val('12');
            $('#a13').val('17');
            $('#a14').val('18');
            $('#nextLevel').show();
            break;
    }   
    
}
