const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    /* this.dataset returns an object containing all data- attributes (i.e., data-sizing: px);
    color slider has no data-sizing attribute */
    const suffix = this.dataset.sizing || '';
    /* documentElement -> root element
    this.name -> input name; this.value -> input value */
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));    // updates only when change is completed
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));  // updates simultaneously with mouse change