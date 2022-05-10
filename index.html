<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8"/>
    <title>Random Note Picker</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript">
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
            if ((menuText.value == '' || menuText.value == null) && isrunning){
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
                    await sleep(delta);
                    var newNum = Math.floor(Math.random()*arr.length);
                    if (newNum != oldNum){
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
    </script>
</head>

<body>
    <div class="divBigNote">
        <a class="bigNote" id="currentNote">A</a>
    </div>
    <div class="timerButton">
        <input type='button' id='timerButton' onclick='startTimer()' value='Start Timer'><br> 
    </div>
    <div class="radioButtons">    
        <input type='radio' name='radioButton' onchange='changeHandler(this)' value='1' checked>Use Seconds<br>
        <input type='radio' name='radioButton' onchange='changeHandler(this)' value='2' >Use Time Signatures and Metronome<br>
    </div>
    <div class="menuText">
        <input type='double' id="menuText" name='delay' placeholder='Time in seconds.' min = "0.1" max = "300">
    </div>
</body>

</html>

 