const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDeg = (seconds / 60) * 360 + 90;
    const minsDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDeg = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    // remove reverse motion (cubic-bezier) from reduced degrees (450 -> 90)
    if (seconds === 0) secondHand.style.transitionDuration = "0s";
    if (seconds === 1) secondHand.style.transitionDuration = "0.05s";
}

setInterval(setDate, 1000);