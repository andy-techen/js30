# JavaScript30
Notes for 30 Day JavaScript (Vanilla JS) Challenge as proposed by [Wes Bos](https://github.com/wesbos/JavaScript30).
## 01 - JavaScript Drum Kit
> [Demo](https://andy-techen.github.io/js30/01%20-%20JavaScript%20Drum%20Kit/index.html)
- `keydown` event
  - Fired when any key is pressed (unlike `keypress`)
  - Improve `querySelector` flexibility with **CSS attribute selectors** and **ES6 template literals**

    ```JavaScript
    document.querySelector(`audio[data-key="${e.key}"]`);
    ```

- `transitionend` event
  - Fired when a CSS transition has completed; CSS property found in `e.propertyName`

- Playing `audio`
  - Setting `audio.currentTime = 0` rewinds the audio
  - Play `audio` by simply calling `audio.play()`
## 02 - JS and CSS Clock
> [Demo](https://andy-techen.github.io/js30/02%20-%20JS%20and%20CSS%20Clock/index.html)
- Setting `transform` and `transition`

  ```CSS
  .hand {
    /* defaults to 50%, controls pivot position */
    transform-origin: 100%;
    /* changes default position to 12 o'clock (90 degrees) */
    transform: rotate(90deg);
    /* transition: <transition-property> <transition-duration>,
    all transitionable properties will transition within 0.05s */
    transition: all 0.05s;
    /* controls transition acceleration, creates ticking effect;
    "ease-in-out" serviceable for generic transitions */
    transition-timing-function: cubic-bezier(0.42, 0, 0.41, 1.67);
  }
  ```
## 03 - CSS Variables
> [Demo](https://andy-techen.github.io/js30/03%20-%20CSS%20Variables/index.html)
- CSS variables
  - Allows CSS to be changed real-time with JS, whereas CSS variables in Sass are defined at compile time
  - Defined with `--` prefix, and referenced with `var()`
  - `:root` element can be referenced with `document.documentElement`

- `change` and `mousemove` events
  - `change` event is triggered when `value` of `<input>`, `<select>`, or `<textarea>` is *committed*, whereas mousemove is fired simultaneously upon movement
## 04 - Array Cardio Day 1
> [Demo](https://andy-techen.github.io/js30/04%20-%20Array%20Cardio%20Day%201/index.html)
- `console.table()`
  - Displays results in a nice table view

- `Array.prototype.filter()`
  - Creates a new array with objects that return `true`

- `Array.prototype.sort()`

  ```JavaScript
  sort((firstObj, secondObj) => {
    <compareFunction> ? 1 : -1;
  });
  ```
  - If return > 0, sort `secondObj` to an index lower than `firstObj` (i.e., `secondObj` comes first), vice versa

- `Array.prototype.reduce()`

  ```JavaScript
  reduce((accumulator, currentValue) => {
    <reducerFunction>;
    return singleValueOrObject
  }, initialValue);
  ```
## 05 - Flex Panel Gallery
> [Demo](https://andy-techen.github.io/js30/05%20-%20Flex%20Panel%20Gallery%20/index.html)
- CSS selectors
  - `.panel>*`
    - Selects all elements where the parent has a `.panel` class

  - `.panel>*:first-child`
    - Selects every element selected by `.panel>*` that is the first child of its parent

- CSS Flexbox
  - `display: flex`
    - `align-items`: aligns flex items *vertically*
    - `justify-content`: aligns flex items *horizontally*
    - `flex-direction`: `row(-reverse)` & `column(-reverse)`, sets placement of flex items
  
  - `flex` property
    - `flex: <flex-grow> <flex-shrink> <flex-basis>`
    - `flex-grow`: defaults to 1, grow `n` times larger than other flex items
## 06 - Ajax Type Ahead
> [Demo](https://andy-techen.github.io/js30/06%20-%20Ajax%20Type%20Ahead/index.html)
- `fetch`, `Promise`, and `Promise.prototype.then()`
  - A `Promise` is an object representing the eventual completion or failure of an asynchronous operation

    ```JavaScript
    fetch(endpoint)  // returns a Promise
      // if receives Promise, return blob.json()
      .then(blob => blob.json())
      // method chaining; if receives Promise, data = blob.json(), spread (...) data array into cities
      .then(data => cities.push(...data));
    ```

- `String.prototype.match()` and `String.prototype.replace()`
  - The `RegExp` object is handy for creating regex containing variables

    ```JavaScript
    const regex = new RegExp('word', 'gi');  // g: global (all possible matches); i: ignoreCase
    // is equivalent to
    const regex = /word/gi;  // without quotes
    ```
  - `Number.prototype.toLocaleString()` is handy for adding thousand separators (when `locales` = 'en-US')

- `keyup` event
  - Fires when the user *releases* a key (`keydown` -> when user *presses* a key)
## 07 - Array Cardio Day 2
> [Demo](https://andy-techen.github.io/js30/07%20-%20Array%20Cardio%20Day%202/index.html)
- `Array.prototype.some()` and `Array.prototype.every()`
  - Whether *some* or *all* elements return `true`

- `Array.prototype.find()` and `Array.prototype.findIndex()`
  - Find elements based on testing function, returns *object* and *index* respectively
  
- Deleting from array at given index
  - `Array.prototype.splice(index, n, *items)`
    - Removes/replaces `n` elements starting from `index` and add `*items` to array
    - If `*items` not specified, only removes elements from the array

  - `Array.prototype.slice(start, end)`
    - Extracts from `start` index to `end` index, returns an array (can use `...` to spread into new array)
      
      ```JavaScript
      const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];
      ```
## 08 - Fun with HTML5 Canvas
> [Demo](https://andy-techen.github.io/js30/08%20-%20Fun%20with%20HTML5%20Canvas/index.html)
- `<canvas>`: used for drawing graphics on a web page

  ```JavaScript
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  function draw(e) {  // callback draw function upon MouseEvents 
    // creates an empty list of sub-paths
    ctx.beginPath();
    // moves the starting point of a new sub-path to (lastX, lastY)
    ctx.moveTo(lastX, lastY);
    // connects the last point in the current sub-path to (e.offsetX, e.offsetY) with a straight line
    ctx.lineTo(e.offsetX, e.offsetY);
    // strokes the current sub-paths with the current stroke style (ctx.StrokeStyle)
    ctx.stroke();
    // dynamically set starting point of path to current mouse position
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
  ```

- `MouseEvent`
  - `mousedown`: fired when mouse is pressed
  - `mouseup`: fired when mouse is released
  - `mouseout`: fired when cursor is no longer contained within the element
## 09 - Dev Tools Domination
> [Demo](https://andy-techen.github.io/js30/09%20-%20Dev%20Tools%20Domination/index.html)
- `console.dir(element)`
  - Logs a dropdown of the properties of `element`
- `console.assert()`

  ```JavaScript
  // <conditional test>, <message logged if false>
  console.assert(1 === 2, 'This is wrong!');  // if true, logs nothing
  ```

- `console.group()`, `console.groupCollapsed()`, `console.groupEnd()`

  ```JavaScript
  dogs.forEach(dog => {
    // groups message logs between `groupCollapsed` and `groupEnd`
    console.groupCollapsed(`${dog.name}`);  // group label = `${dog.name}`
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);  // use group label as argument to close group
  });
  ```

- `console.time()`, `console.timeEnd()`

  ```JavaScript
  // times the elapsed time from console.time() call to console.timeEnd() call
  console.time('fetching data');  // enter timer label as argument
  fetch('https://api.github.com/users/andy-techen')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');  // use timer label to end timer
        console.log(data);
    });
  ```
## 10 - Hold Shift and Check Checkboxes
> [Demo](https://andy-techen.github.io/js30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index.html)
- `<input type="checkbox">` and `MouseEvent`
  - `checkbox.checked` returns `true` when checked
  - `MouseEvent.shiftKey` returns `true` if the shift key was down when the mouse event was fired

- Flag variables in JavaScript
  - Used to indicate and toggle between two boolean values depending on events in the program

    ```JavaScript
    let flagVariable = false;
    if (turnTrueCondition || turnFalseCondition) {
      flagVariable = !flagVariable;
    }
    if (flagVariable) {
      // actions when true;
    }
    ```
## 11 - Custom Video Player
> [Demo](https://andy-techen.github.io/js30/11%20-%20Custom%20Video%20Player/index.html)
- `HTMLMediaElement` (`video` and `audio`)
  - `video.paused`: returns boolean of whether the media element is paused
  - `timeupdate` event: fired when `currentTime` attribute is updated

- `Element.requestFullscreen()`
  - Issues an asynchronous request to display the element in full-screen mode

- Calling methods with bracket notation
  - A method is basically a property that can be called 

    ```JavaScript
    video.method();
    // is equivalent to
    const method = '';
    video[method]();  // quite handy for dynamic method calling
    ```

- Short-circuit evaluation
  - `condition && expr`: `expr` is only called when `condition` is `true`