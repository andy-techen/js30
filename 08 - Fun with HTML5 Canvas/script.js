const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// ctx base settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = false;  // direction of lineWidth growth

function draw(e) {
    if (!isDrawing) return;  // if mouse is pressed down and drawing
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;  // set hue, saturation, lightness
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if (hue < 360) {
        hue++;
    } else {
        hue = 0;
    }

    // change growth direction
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

    if (ctx.lineWidth == 100 || ctx.lineWidth == 10) {
        direction = !direction;
    }
}

canvas.addEventListener('mousedown', (e) => {   // pressed mouse
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false);    // released mouse
canvas.addEventListener('mouseout', () => isDrawing = false);   // mouse out of frame