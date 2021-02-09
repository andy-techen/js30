const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');   // added moving highlight span element
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    // added scrollY to offset window scrolling
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));