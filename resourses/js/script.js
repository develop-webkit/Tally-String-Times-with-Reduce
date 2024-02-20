"use strict;"

const videoEl = document.querySelector(".videos");
const videoLis = Array.from(videoEl.querySelectorAll("li"));
let hours = 0;
let minute = 0;
let second = 0;

const TotalSecond = videoLis
    .map((videoLis) => {
        const [minutes,second] = videoLis.dataset.time.split(":").map(parseFloat);
        return (minutes * 60) + second;
    })
    .reduce((total, number)=>{ return total + number },0);

hours = Math.floor(TotalSecond / 3600);
minute = Math.floor((TotalSecond / 60) - hours * 60);
second = (TotalSecond) - minute * 60 - hours * 3600;

hours = Math.floor(TotalSecond / 3600);
let secondsLeft = TotalSecond % 3600
minute = Math.floor(secondsLeft / 60);
second = minute % 60
console.log(hours,minute,second)