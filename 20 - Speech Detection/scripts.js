const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.interimResults = true;  // synchronizes results with speech

let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join("");
    p.textContent = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');  // creates new p element
        words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();