function playKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)  // keyCode deprecated
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!audio) return;  // stop the function from running
    audio.currentTime = 0;  // start the audio from the beginning
    audio.play();
    key.classList.add("playing");
}

// remove .playing after .key transform (longest transition) finishes
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playKey);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));