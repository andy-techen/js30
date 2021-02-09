const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateList() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        // .filter(voice => voice.lang.includes('en'))  // -> filters voices that are English
        .map(voice => `<option value="${voice.name}">${voice.name}</option>`)
        .join("");
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {  // cancel speech when changing options/voices
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateList);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));  // toggle.bind(null, false)