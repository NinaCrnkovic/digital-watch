
var curentH = new Date().getHours();
var curentM = new Date().getMinutes();
var curentS = new Date().getSeconds();
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
hours.innerHTML = curentH;
minutes.innerHTML = curentM;
seconds.innerHTML = curentS;

function clock (){
    curentS++
    if (curentS === 60){
        curentM ++;
        curentS = 0;
        if (curentM === 60){
            curentH ++;
            curentM = 0;
            if (curentH === 24){
                curentH = 0;
            }
        }

    }

    hours.innerHTML = (curentH < 10 ? "0" + curentH: curentH);
    minutes.innerHTML = (curentM < 10 ? "0" + curentM: curentM);
    seconds.innerHTML = (curentS < 10 ? "0" + curentS: curentS);
}

var interval = setInterval(clock, 1000);
