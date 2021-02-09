const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');   // added moving highlight span element
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top + window.scrollY}px)`;
    // added scrollY to offset window scrolling
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));