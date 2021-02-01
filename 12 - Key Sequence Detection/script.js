const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    // check from the end of the pressed array, remove letters before secretCode
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);

    if (pressed.join('') === secretCode) {
        console.log('You got it!');
        cornify_add();  // adds random stuff (unicorns)
    }
});