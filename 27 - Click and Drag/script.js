const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    // subtract offset if there's a margin between page and slider
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    console.log(e);
    const x = e.pageX - slider.offsetLeft;
    console.log({x, startX});  // displays as object in console (shows the keys)
    const walk = (x - startX) * 3;  // scroll a bit more on every scroll
    slider.scrollLeft = scrollLeft - walk;
    console.log(slider.scrollLeft);
});