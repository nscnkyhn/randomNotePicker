const arr = ['A','B','C','D','E','F','G'];
let isrunning = false;
let option = "1";

function changeHandler(src){
    menuText = document.getElementById('menuText');
    option = src.value;
    if(src.value == 1) {
        menuText.placeholder='Time in seconds.';
    }
    else {
        menuText.placeholder='Metronome (BPM)';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startTimer() {
    isrunning = !isrunning;
    menuText = document.getElementById('menuText');
    alertText = document.getElementById('alertText');
    value = menuText.value.replace(',','.');
    if (isNaN(parseFloat(value)) || value == '' || value == null){
        menuText.focus();
        isrunning = false;
        alertText.innerHTML = "Geçerli bir sayı girilmedi.";
    } else if (value == 0 || value > 300){
        menuText.focus();
        isrunning = false;
        alertText.innerHTML = "Girilen değer 0'dan büyük, 300'den küçük olmalıdır.";
    } else {
        document.getElementById('timerButton').value='Stop';
        doChange(value);
        alertText.innerHTML = "";
    }
}

async function doChange(value) {
    value = value.replace(',','.');
    let delta = (option == '1') ? parseFloat(value)*1000 : 60/parseFloat(value)*1000;
    while (1){
        if (isrunning){
            var newNum = Math.floor(Math.random()*arr.length);
            if (newNum != oldNum){
                await sleep(delta);
                var myInput = arr[newNum];
                document.getElementById('currentNote').innerHTML = myInput;
                var oldNum = newNum;
            }
        } else {
            document.getElementById('timerButton').value='Start Timer';
            return
        }
    }   
}