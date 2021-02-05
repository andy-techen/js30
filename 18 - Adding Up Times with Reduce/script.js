const timeNodes = document.querySelectorAll('[data-time]');

const seconds = Array.from(timeNodes)
                    .map(node => node.dataset.time)
                    .map(time => {
                        const [mins, secs] = time.split(":").map(parseFloat);
                        return mins * 60 + secs;
                    })
                    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

// get remaining hours in integer
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

// get remaining minutes in integer
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);