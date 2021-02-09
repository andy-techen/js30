const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition((data) => {
    speed.textContent = Math.round(data.coords.speed);
    // the direction towards which the device is facing, north = 0, west = 90, so on and so forth
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
});

// simulating random positions
function randPosition() {
    speed.textContent = Math.round(Math.random() * 100);
    arrow.style.transform = `rotate(${Math.random() * 360}deg)`;
}
setInterval(randPosition, 1000);