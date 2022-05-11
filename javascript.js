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
    if (isNaN(parseFloat(menuText.value)) || menuText.value == '' || menuText.value == null){
        alert("Geçerli bir sayı girilmedi.");
        isrunning = false;
    } else if (menuText.value == 0 || menuText.value > 300){
        alert("Girilen değer 0'dan büyük, 300'den küçük olmalıdır.");
        isrunning = false;
    } else {
        document.getElementById('timerButton').value='Stop';
        doChange();
    }
}

async function doChange() {
    menuText = document.getElementById('menuText');
    menuText.value = menuText.value.replace(',','.');
    let delta = (option == '1') ? parseFloat(menuText.value)*1000 : 60/parseFloat(menuText.value)*1000;
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