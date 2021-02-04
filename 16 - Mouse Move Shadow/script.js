const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;  // 100px 

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // e.target changes to the inner h1 when mouse moves to upper-left corner of .hero
    if (this !== e.target) {   
        x += e.target.offsetLeft;
        y += e.target.offsetTop; 
    }

    // determine shadow movements and colors
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(225, 0, 225, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 225, 225, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 225, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 225, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);