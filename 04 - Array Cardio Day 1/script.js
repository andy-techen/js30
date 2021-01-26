const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// returns boolean true; no need to return false -> only "true" objects will be filtered
console.table(fifteen);  // display results in a nice table view

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);  // ternary statement
// if return greater than 0, sort b to an index lower than a (i.e. b comes first), vice versa
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {  // reduce((accumulator, currentValue) => {}, initialValue)
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  return (a.passed - a.year) > (b.passed - b.year) ? 1 : -1;
})
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// go to https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
const category = document.querySelector('.mw-category');
const links = [...category.querySelectorAll('a')];  // `...` spread operator; can also use Array.from()

const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));

console.log(de);
*/

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabet = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(', ');
  const [bFirst, bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
})
console.log(alphabet);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;  // instantiate {item: 0} for new items
  }
  obj[item]++;  // iterate through items, decrement count by 1 upon occurence
  return obj;
}, {})
console.log(transportation);