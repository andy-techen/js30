function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {   // firefox does not recognize flex-grow
        this.classList.toggle('open-active');
    }
}

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// add .open-active after toggleOpen animation ends
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); 