const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({ isAdult });

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const targetComment = comments.find(comment => comment.id === 823423);
console.log(targetComment);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// Delete the comment with the ID of 823423
// Method 1
const newComments = [
    ...comments.slice(0, index),  // slice returns an array of index 0 to `index` -> spread into newComments 
    ...comments.slice(index + 1)  // from index + 1 to end -> spread into newComments 
]
console.table(newComments);

// Method 2
comments.splice(index, 1);  // remove 1 element from the `index` index
console.table(comments);

