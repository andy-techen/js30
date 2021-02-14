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
- **CSS variables**
  - Allows CSS to be changed real-time with JS, whereas **CSS variables** in Sass are defined at compile time
  - Defined with `--` prefix, and referenced with `var()`
  - `:root` element can be referenced with `document.documentElement`

- `change` and `mousemove` events
  - `change` event is triggered when `value` of `<input>`, `<select>`, or `<textarea>` is **committed**, whereas `mousemove` is fired simultaneously upon movement

## 04 - Array Cardio Day 1
> [Demo](https://andy-techen.github.io/js30/04%20-%20Array%20Cardio%20Day%201/index.html)
- `console.table()`
  - Displays results in a nice table view

- `Array.prototype.filter()`
  - Creates a new array with objects that return `true`

- `Array.prototype.map()`
  - Calls function on every element in the array and creates a new array populated with the results

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
- **CSS selectors**
  - `.panel>*`
    - Selects all elements where the parent has a `.panel` class

  - `.panel>*:first-child`
    - Selects every element selected by `.panel>*` that is the first child of its parent

- **CSS Flexbox**
  - `display: flex`
    - `align-items`: aligns flex items **vertically**
    - `justify-content`: aligns flex items **horizontally**
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
  - Fires when the user **releases** a key (`keydown` -> when user **presses** a key)

## 07 - Array Cardio Day 2
> [Demo](https://andy-techen.github.io/js30/07%20-%20Array%20Cardio%20Day%202/index.html)
- `Array.prototype.some()` and `Array.prototype.every()`
  - Whether *some* or *all* elements return `true`

- `Array.prototype.find()` and `Array.prototype.findIndex()`
  - Find elements based on testing function, returns **object** and **index** respectively
  
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

- **Flag variables** in JavaScript
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

- **Short-circuit evaluation**
  - `condition && expr`: `expr` is only called when `condition` is `true`

## 12 - Key Sequence Detection
> [Demo](https://andy-techen.github.io/js30/12%20-%20Key%20Sequence%20Detection/index.html)
- Detect key sequences with a `keyup` `EventListener`, an array and `Array.prototype.join("")`

- [Cornify.js](https://github.com/Cornify/Cornify), the world's #1 unicorn and rainbow service provider 🦄
  - Add random unicorns and rainbows to the page with `cornify_add()`

## 13 - Slide in on Scroll
> [Demo](https://andy-techen.github.io/js30/13%20-%20Slide%20in%20on%20Scroll/index.html)
- **Debouncing**
  - Executing the attached function only after a specified time (milliseconds) once the user stops firing the event

    ```JavaScript
    function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function () {
          const context = this, args = arguments;
          const later = function () {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);  // in this case, waits for 20 milliseconds
          if (callNow) func.apply(context, args);
      };
    }
    ```
  - Often used for `scroll`, `window.onresize` events and frequent **Ajax** calls (e.g., search suggestions)
  - Can be implemented in **lodash** with `_.debounce(func, [wait=0], [options={}])`
  - **Throttling**: limiting the attached function to be executed only once in a given time interval
  
- `window` and `HTMLElement` coordinates
  - `window.scrollY`: the number of pixels that has already been scrolled vertically
  - `window.innerHeight`: the height of the content area of the browser window
  - `HTMLElement.offsetTop`: the distance from this element's top border to its `offsetParent`'s top border

## 14 - JavaScript References VS Copying
> [Demo](https://andy-techen.github.io/js30/14%20-%20JavaScript%20References%20VS%20Copying/index.html)
- Copying **arrays** (1-level deep)
  
  ```JavaScript
  const array = ["item1", "item2", "item3"];
  // method 1
  const newArray = array.slice();
  // method 2
  const newArray = [].concat(array);
  // method 3
  const newArray = [...array];
  // method 4
  const newArray = Array.from(array);
  ```

- Copying **objects** (1-level deep)
  
  ```JavaScript
  const object = {
    key1: value1,
    key2: value2,
    key3: value3
  }
  // method 1
  const newObject = Object.assign({}, object, ...sources);
  // ...sources: an object containing properties to be assigned to the new object
  // method 2
  const newObject = {...object};
  ```

- **Deep cloning** (copying nested arrays/objects)
  - `_.cloneDeep()` in **lodash**
  - `JSON.parse(JSON.stringify(arrayOrObject))`

## 15 - LocalStorage
> [Demo](https://andy-techen.github.io/js30/15%20-%20LocalStorage/index.html)
- `submit` event
  - Fires when a `<form>` is submitted (when `<input type="button">` is clicked, or `Enter` key is pressed while editing a field)
  - Use `e.preventDefault()` to prevent page reload every time a form is submitted

- **Local storage**
  - Can be monitored in **Chrome DevTools -> Application -> Local Storage**
  - `localStorage` has no expiration time, whereas data stored in `sessionStorage` gets cleared when the page session ends
  - Pitfalls
    - Synchronous
    - Can't be used by web workers -> unable to utilize background processing
    - Can only store ~5MB of data
    - Any JavaScript code on your page can access local storage -> no data protection
  - `localStorage.setItem(key, JSON.stringify(value))` adds key value pair to **Local Storage**
  - `localStorage.getItem(JSON.parse(key))` gets value of key from **Local Storage**

- **Event delegation**
  - Add `EventListener` to parent elements or existing elements at page load, then filter out the target element
    
    ```JavaScript
    function toggleDone(e) {
      // skip this unless it's an input element
      if (!e.target.matches('input')) return;  // equivalent to .is() in JQuery
      const el = e.target;
      // do stuff with el
    }
    ```

## 16 - Mouse Move Shadow
> [Demo](https://andy-techen.github.io/js30/16%20-%20Mouse%20Move%20Shadow/index.html)
- `contenteditable`
  - An attribute indicating if the element can be edited by the user, e.g., `<h1 contenteditable></h1>`

- `MouseEvent` `offset` coordinates
  - `offsetX`: the distance (px) between the `MouseEvent` and the **left** padding edge of the target node
  - `offsetY`: the distance (px) between the `MouseEvent` and the **top** padding edge of the target node

## 17 - Sort Without Articles
> [Demo](https://andy-techen.github.io/js30/17%20-%20Sort%20Without%20Articles/index.html)
- `RegExp` revisit
  - `^`: starts with
  - `(a |an |the )`: contains "a ", "an ", "the " (spaces matter)

## 18 - Adding Up Times with Reduce
> [Demo](https://andy-techen.github.io/js30/18%20-%20Adding%20Up%20Times%20with%20Reduce/index.html)
- `array.map(parseFloat)` parses array of strings to floats 

- Getting integer and decimals from float
  ```JavaScript
  const totalSecs = 1000;
  const mins = Math.floor(totalSecs / 60);  // 16
  const secs = totalSecs % 60;  // 40
  ```

## 19 - Webcam Fun
> npm install  
> npm start
- Accessing user media input via `MediaStream` objects
  
  ```JavaScript
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  // mobile front camera: { audio: true, video: { facingMode: "user" } }
  // mobile rear camera: { audio: true, video: { facingMode: { exact: "environment" } } }
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch((err) => console.log(err));
  ```

- Media elements on `<canvas>`
  - Manipulating `CanvasRenderingContext2D` instances
  
    ```JavaScript
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, dx, dy, dWidth, dHeight);
    // image: an element to draw into the context, e.g., HTMLImageElement, HTMLVideoElement

    // returns an ImageData object containing the array of pixel values
    ctx.getImageData(sx, sy, sw, sh);
    // dx, sx: x coordinate of the top-left corner of image mask
    // dy, sy: y coordinate of the top-left corner of image mask
    // dWidth, sw: the width of image mask
    // dHeight, sh: y coordinate of the top-left corner of image mask

    // paints data from the given ImageData object onto the canvas
    ctx.putImageData(imageData, dx, dy);
    ```
  
  - `ImageData.data`
    - An array containing pixel data in RGBA (0~255) order, i.e., [r1, g1, b1, a1, r2, g2, b2, a2, ...]

  - Capturing and downloading images from `<canvas>`
    ```JavaScript
    const data = canvas.toDataURL('image/jpeg');  // returns the canvas image in base64 encoding
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'image');  // <a href=`${data}` download="image"> -> image.jpg
    ```

- `canplay` event
  - Fired when the user agent can play the media (not necessarily play through)

- `debugger`
  - Can be placed in source and utilized for setting breakpoints and detecting bugs

## 20 - Speech Detection
> npm install  
> npm start
- `SpeechRecognition` and `webkitSpeechRecognition`
  - Only available in **Chrome** and **Edge**
  - Setting up `SpeechRecognition` object

    ```JavaScript
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.interimResults = true;  // synchronizes results (not yet final) with speech
    ```

  - `result` event
    - Fired when the speech recognition service returns a result

      ```JavaScript
      recognition.addEventListener('result', e => {
      const transcript = Array.from(e.results)  // e.results returns as a NodeList
          .map(result => result[0].transcript)  // returns the words in an array
          .join("");  // joins the words into a sentence
      });
      ```

  - `end` event
    - Fired when the speech recognition service has disconnected
    - `recognition.addEventListener('end', recognition.start);` reboots recognition instance

- Creating and appending elements on the fly
  ```JavaScript
  const words = document.querySelector('.words');
  let p = document.createElement('p');

  if (e.results[0].isFinal) {  // i.e., not an interimResult
    p = document.createElement('p');  // creates new <p> element
    words.appendChild(p);
  }
  ```

## 21 - Geolocation
> npm install  
> npm start
- `navigator.geolocation.WatchPosition()`
  - Called automatically each time the position of the device changes
  - Returns `GeolocationPosition` as `data`; position of the device can be found in `data.coords`

- `navigator.geolocation.getCurrentPosition()`
  - Returns current location of device via a `GeolocationPosition` instance

## 22 - Follow Along Link Highlighter
> [Demo](https://andy-techen.github.io/js30/22%20-%20Follow%20Along%20Link%20Highlighter/index.html)
- `getBoundingClientRect()`
  - Returns a `DOMRect` object containing the size of an element and its coordinates relative to the viewport

- `mouseenter` event
  - Fired when pointing device initially enters the element, acts similiar to the `:hover` pseudo-class when combined with `mouseleave`
  - `mouseenter` vs. `mouseover`: `mouseenter` doesn't **bubble**, whereas a single `mouseover` event is sent to the deepest element of the DOM tree, then it **bubbles** up the hierarchy until it is canceled by a handler or reaches the root (`document` object)

## 23 - Speech Synthesis
> [Demo](https://andy-techen.github.io/js30/23%20-%20Speech%20Synthesis/index.html)
- `speechSynthesis`
  - `.getVoices()` returns a list of available `SpeechSynthesisVoice` objects
  - Start the `msg` `SpeechSynthesisUtterance` with `.speak(msg)`, stop with `.cancel()`
  - `SpeechSynthesisUtterance` contains the properties (e.g., text, language, pitch, volume) of the speech

- `<select>` and `<option>`
  - Access the selected `<option>` value with `$("select").value`
  
    ```HTML
    <select name="choice">
      <option value="first">First Value</option>
      <option value="second" selected>Second Value</option>
      <option value="third">Third Value</option>
    </select>
    ```

- `Array.prototype.find()`
  - Returns the value of the first element in the array that satisfies the condition

- `Function.prototype.bind(thisArg, *args)`
  - Creates a **new** function with `thisArgs` as `this` and `*args` as arguments for the provided function
  - Commonly used when the function requires explicit assignment of a specific `this`

    ```JavaScript
    $("button").addEventListener('click', () => func(arg1, arg2));
    // equivalent to
    $("button").addEventListener('click', func.bind(null, arg1, arg2));
    // if `thisArgs` is null, the `this` of the executing scope, $("button"), is used as `thisArg`
    ```

## 24 - Sticky Nav
> [Demo](https://andy-techen.github.io/js30/24%20-%20Sticky%20Nav/index.html)
- `<nav>`
  - `<nav>` no longer takes up space in the document when `position: fixed` -> set `${nav.offsetHeight}px` as `document.body.style.paddingTop` to prevent subsequent elements from moving up
  - Basic fixed `<nav>` bar
  
    ```HTML
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
    ```
    ```CSS
    nav {
      top: 0;
      width: 100%;
      position: fixed;
      z-index: 1;
    }
    nav ul {
      margin: 0;
      padding: 0;
      list-style: none;  /* no bullets */
      display: flex;
    }
    nav li {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ```

- Adjusting `transform` and `transition`
  - `transition` : `property` | `duration` | `timing-function` | `delay`, e.g, `transition: all 0.5s ease-out 0.1s` applies `ease-out` for `0.5s` on `all` changed properties after a `0.1s` delay
  - `transform: scale(x, y)` resizes element by `x * y`, set origin with `transform-origin`

## 25 - Event Capture, Propagation, Bubbling and Once
> [Demo](https://andy-techen.github.io/js30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/index.html)
- **Event capturing**
  - The event **goes down** from `document` until it reaches target element

- **Event bubbling**
  - The event **bubbles up** from the target element until it reaches `document`
  - `e.stopPropagation()` stops bubbling on **current** event handler (`e.stopImmediatePropagation()` stops all event handlers)

- Event handler options
  ```JavaScript
  element.addEventListener(..., {
    capture: true,
    // if true, the handler is set on the capturing phase;
    // if false (default), the handler is set on the bubbling phase
    once: true;  // removeEventListener after first event occurrence
  })
  ```

## 26 - Stripe Follow Along Nav
> [Demo](https://andy-techen.github.io/js30/26%20-%20Follow%20Along%20Nav/index.html)
- `offset` positions
  - Can be easily accessed in **JQuery** using `$(element).offset()`
  
- Utilizing `setTimeout()` to create delay effect
  ```JavaScript
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') &&  // if first condition == true,
    this.classList.add('trigger-enter-active'), 150);  // do following actions after 0.15s
  ```

## 27 - Click and Drag
> [Demo](https://andy-techen.github.io/js30/26%20-%20Click%20and%20Drag/index.html)
- Explicit `console.log()`
  - `console.log({x, y})` logs `x`, `y` values as an object `{x: valueX, y: valueY}`

- `MouseEvent.pageX`
  - The X coordinate where the `MouseEvent` was called relative to the left edge of the entire **document**, taking into account any horizontal scrolling of the page (not including scrolling of the elements)

- `Element.scrollLeft`
  - Gets or sets the number of pixels that an **element**'s content is scrolled from its left edge
    
    ```JavaScript
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        // subtract offset if there's a margin between page and slider
        startX = e.pageX - slider.offsetLeft;
        // get how far the slider is scrolled already
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseup', () => { isDown = false; });
    slider.addEventListener('mouseleave', () => { isDown = false; });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        // get current position on page upon mousemove
        const x = e.pageX - slider.offsetLeft;
        // (mouse moves left) ? negative walk -> scrolls left : positive walk -> scrolls right
        // scroll a bit more (3X) on every mousemove to make scrolling smoother
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
    });
    ```

## 28 - Video Speed Controller
> [Demo](https://andy-techen.github.io/js30/27%20-%20Video%20Speed%20Controller/index.html)
