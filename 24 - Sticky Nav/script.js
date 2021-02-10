const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        // when position is fixed, nav no longer takes up space in the document
        // .site-wrap (content) jumps up to fill the space -> add paddingTop to keep content still
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add("fixed-nav");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}

window.addEventListener('scroll', fixNav);
