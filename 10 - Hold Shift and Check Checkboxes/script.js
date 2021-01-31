let lastChecked;

function handleCheck(e) {
    // check if shift key is pressed (e.shiftKey)
    // check whether checked/unchecked (this.checked)
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // loop through checkboxes, see if between lastChecked and currently checking object
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));