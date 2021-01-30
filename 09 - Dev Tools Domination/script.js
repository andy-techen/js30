const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello!');

// Interpolated
console.log('Hello, I am %s', 'Andy');

// Styled
console.log('%c Hello!', 'font-size: 20px; color: red;')

// warning!
console.warn('This is a warning!');

// Error :|
console.error('There is an error!');

// Info
console.info('Here is some info!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('na-class'), 'This is wrong!');  // <conditional test>, <message if false>

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);  // dropdown of element

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Element');
console.count('Element');
console.count('Element');   // console logs occurence of same element, i.e., Element: 3

// timing
console.time('fetching data');
fetch('https://api.github.com/users/andy-techen')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
