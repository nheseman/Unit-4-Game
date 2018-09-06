$(document).ready(function(){

//random number generation

let randNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
$('#randNum').html(randNumber);
    
console.log(randNumber);

//crystal randomization

let amethyst = Math.floor(Math.random()*12)+1;

console.log(amethyst);

let emerald = Math.floor(Math.random()*12)+1;

console.log(emerald);

let ruby = Math.floor(Math.random()*12)+1;

console.log(ruby);

let sapphire = Math.floor(Math.random()*12)+1;

console.log(sapphire);

//win/loss function

let wins = 0;
let losses = 0;  

let totalScore = 0;
$('#totalScore').text(totalScore);
console.log(totalScore);

function win() {
    wins = wins+1;
    $('#wins').text(wins);
    resetTwo();
    reset();
}

function lose() {
    losses = losses+1;
    $('#losses').text(losses);
    resetTwo();
    reset();
}

$('#amethyst').click(function() {
    totalScore = totalScore + amethyst
    $('#totalScore').text(totalScore);
    if ( totalScore === randNumber ) {
        win();
        reset();
        resetTwo();
       } else if ( totalScore > randNumber ) {
        lose();
        reset();
        resetTwo();
   }  
})

$('#emerald').click(function() {
    totalScore = totalScore + emerald;
    $('#totalScore').text(totalScore);
    if ( totalScore === randNumber ) {
        win();
        reset();
        resetTwo();
    } else if ( totalScore > randNumber ) {
        lose();
        reset();
        resetTwo();
   }
})

$('#ruby').click(function() {
    totalScore = totalScore + ruby;
    $('#totalScore').text(totalScore);
    if ( totalScore === randNumber ) {
        win();
        reset();
        resetTwo();
       } else if ( totalScore > randNumber ) {
        lose();
        reset();
        resetTwo();
    }
})

$('#sapphire').click(function() {
    totalScore = totalScore + sapphire;
    $('#totalScore').text(totalScore);
    if ( totalScore === randNumber ) {
        win();
        reset();
        resetTwo();
       } else if ( totalScore > randNumber ) {
        lose();
        reset();
        resetTwo();
   }
})

//win/loss determination
console.log(wins);
console.log(losses);

//game reset
function reset () {
    totalScore = 0;
    $('#totalScore').text(totalScore);
}

function resetTwo () {
    randNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
    $('#randNum').html(randNumber);
    amethyst = Math.floor(Math.random()*12)+1;
    emerald = Math.floor(Math.random()*12)+1;
    ruby = Math.floor(Math.random()*12)+1;
    sapphire = Math.floor(Math.random()*12)+1;
}

});