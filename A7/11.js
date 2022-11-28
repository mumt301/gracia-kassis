"use strict";

// Turn theremin on
function thereminOn(oscillator) {
    oscillator.play(); oscillatorb.play();
}

let autotune = false

// Control the theremin: Had to add the new functions in here.
function thereminControl(e, oscillator, oscillatorb, minfrequencyType, maxfrequencyType, notename, freqRange, theremin){
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x, y);
    
    let minFrequency = 220.0;
    let maxFrequency = 880.0;
    let freqRange = maxFrequency - minFrequency;
    let thereminFreq = minFrequency + (x / theremin.clientWidth) * freqRange;
    let thereminVolume = 1.0 - (y / theremin.clientHeight);}

function autotune(frequency,oscillator)
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true){
            autotune = true;
            console.log("You've turned autotune on" + autotune);}
    else {
        autotune=false;
        console.log("The autotune is off")
    }

    if (autotune==true){
        let midiNoteNumber = frequencyToMidi(frequency)
        let TunedNote=Math.round(midiNoteNumber)
        let TunedFrequency = midiToFrequency(TunedNote)
        let NoteName = noteFromFrequency(TunedFrequency)
        document.getElementById("FrequencyOutput").innerHTML="The frequency playing is : "+ Math.round(TunedFrequency*100)/100
        document.getElementById("NoteOutput").innerHTML="The note playing is : "+ notename
        oscillator.frequency=TunedFrequency;

        let noteName = TunedNote(thereminFreq)
        let notefrequency = TunedFrequency(thereminFreq)

        placeholder1.innerHTML = `Frequency: ${thereminFreq.toFixed(2)}`;
        placeholder2.innerHTML = `Note: ${noteName}`;
    } 

if (autotune == false){
    console.log("Frequency: ", thereminFreq);
    oscillator.frequency = thereminFreq;
    console.log("Volume: ", thereminVolume);
    oscillator.volume = thereminVolume;
    let notename = noteFromFrequency
    let midinumber = frequencyToMidi

    oscillatorb.frequency=interval(thereminFreq, semitonesType);
    notefrequency.innerHTML = "The frequency of Oscillator 1 is" + (thereminFreq);
    
    notename.innerHTML = "This Note is" + noteFromFrequency(thereminFreq);
    freqrange.innerHTML = "Frequency Range " + (freqRange);
   
    placeholder1.innerHTML = `Frequency: ${thereminFreq.toFixed(2)}`;
    placeholder2.innerHTML = `Note: ${noteName}`;
}

// Turn theremin off
function thereminOff(oscillator, oscillatorb) {
    oscillator.stop(); 
    
}
//Had to insert an additional stop for the second oscillator.

//if statement sample
//if (condition) {
    //  block of code to be executed if the condition is true}

//Adding functions for the different modulators in the form through url Parameters.
function runAfterLoadingPage() {
    // Instantiate a sine wave with pizzicato.js
    let urlParameters=(new URL(document.location)).searchParams;
    let oscillatorType = "sine" 
    // Deleted frequency here because it was causing problems. frequency: 220;
   
    if (urlParameters.has('oscillator')){
    oscillatorType=urlParameters.get('oscillator');
             }
    let semitonesType=0
    if(urlParameters.has('semitones')){
        semitonesType=parseInt(urlParameters.get('semitones'));
    }
    let minfrequencyType=220;
    if (urlParameters.has('minfrequency')) {
        minfrequencyType=parseInt(urlParameters.get('minfrequency'));
    }
    let maxfrequencyType=440;
    if (urlParameters.has('maxfrequency')) {
        maxfrequencyType=parseInt(urlParameters.get('maxfrequency'));
    };

//Giving back the user the note name 
const notename = document.getElementById("notename")

//Adding the mode for the oscillator type 
const oscillator = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: oscillatorType,
        frequency: 220
    }

});

const oscillatorb = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: oscillatorType,
        frequency: 220
    }         
   
});
    // Get the theremin div from the html
    const theremin = document.getElementById("thereminZone");

    // Theremin plays when the mouse enters the theremin div
    theremin.addEventListener("mouseenter", function () {
        thereminOn(oscillator);
    });

    // Theremin is controlled while the mouse is inside the theremin div
    theremin.addEventListener("mousemove", function (e) {
        thereminControl(e, oscillator, theremin);
    });

    // Theremin stops when the mouse leaves the theremin div
    theremin.addEventListener("mouseleave", function () {
        thereminOff(oscillator);
    });
}

window.onload = runAfterLoadingPage();