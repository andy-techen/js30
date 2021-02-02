// start with strings, numbers and booleans
let name = "Andy";
let name2 = name;
name = "Andrew";
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
// however what happens when we update that array?
team[3] = 'Lux';
// now here is the problem!
console.log(players, team);
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
// or use an Array method
const team5 = Array.from(players);
// now when we update it, the original one isn't changed
team2[3] = 'John';
team3[3] = 'Alex';
team4[3] = 'Howard';
team5[3] = 'Joseph';
console.log(players, team, team2, team3, team4, team5);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const cap = person;
cap.number = 99;
console.log(person, cap);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 50 })
// We will hopefully soon see the object ...spread
const cap3 = {...person};
cap3.number = 60;
console.log(person, cap2, cap3);

// Things to note - this is only 1 level deep (non-nested objects/arrays) - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
// alternative (poor man's cloneDeep)
const wes = {
    name: 'Wes Bos',
    age: 80,
    social: {
        twitter: '@wesbos',
        instagram: '@wesley'
    }
};

const wes2 = {...wes};  // 1 level deep
const wes3 = JSON.parse(JSON.stringify(wes));
wes2.social.instagram = '@wesleybos';
wes3.social.instagram = '@wes_bos';
console.log(wes, wes2, wes3);
