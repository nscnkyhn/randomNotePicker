let notes = [];
let naturalNotes = ['A','B','C','D','E','F','G'];
let sharpNotes = ['A#','C#','D#','F#','G#'];
let flatNotes = ['Ab','Bb','Db','Eb','Gb'];
let isrunning = false;
let option = "1";

function startTimer() {
    defineNotes();
    isrunning = !isrunning;
    menuText = document.getElementById('menuText');
    alertText = document.getElementById('alertText');
    value = menuText.value.replace(',','.');
    if (isNaN(parseFloat(value)) || value == '' || value == null){
        menuText.focus();
        isrunning = false;
        alertText.innerHTML = "A valid number required!";
    } else if (value == 0 || value > 300){
        menuText.focus();
        isrunning = false;
        alertText.innerHTML = "Input must be between 0 and 300";
    } else {
        document.getElementById('timerButton').value='Stop';
        doChange(value);
        menuText.setAttribute('readonly',true);
        alertText.innerHTML = "";
    }
}

function defineNotes() {
    notes = [];
    alertText = document.getElementById('alertText');
    isNaturalCheck = document.getElementById('naturalCheckBox').checked;
    isSharpCheck = document.getElementById('sharpCheckBox').checked;
    isflatCheck = document.getElementById('flatCheckBox').checked;
    if (!isNaturalCheck && !isSharpCheck && !isflatCheck) {
        alertText.innerHTML = "At least one note class must be selected.";
    }
    if (isNaturalCheck) {
        alertText.innerHTML = "";
        notes = notes.concat(naturalNotes);
    }
    if (isSharpCheck) {
        alertText.innerHTML = "";
        notes = notes.concat(sharpNotes);
    }
    if (isflatCheck) {
        alertText.innerHTML = "";
        notes = notes.concat(flatNotes);
    }
}

async function doChange(value) {
    value = value.replace(',','.');
    let delta = (option == '1') ? parseFloat(value)*1000 : 60/parseFloat(value)*1000;
    while (1){
        if (isrunning){
            var newNum = Math.floor(Math.random()*notes.length);
            if (newNum != oldNum){
                var myInput = notes[newNum];
                document.getElementById('currentNote').innerHTML = myInput;
                var oldNum = newNum;
                await sleep(delta);
            }
        } else {
            document.getElementById('timerButton').value='Start Timer';
            menuText.removeAttribute('readonly');
            menuText.focus();
            return
        }
    }   
}

function changeHandler(src){
    stop();
    menuText = document.getElementById('menuText');
    menuText.value = "";
    option = src.value;
    if(option == 1) {
        menuText.placeholder='Time in seconds.';
        menuText.focus();
    }
    else {
        menuText.placeholder='Metronome (BPM)';
        menuText.focus();
    }
}


document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13 || event.keyCode ==32) {
        startTimer();
    }
});
function stop () {
    isrunning = false;
    menuText.removeAttribute('readonly');
    document.getElementById('timerButton').value='Start Timer';

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
