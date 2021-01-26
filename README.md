# JavaScript30
Notes for 30 Day JavaScript (Vanilla JS) Challenge as proposed by [Wes Bos](https://github.com/wesbos/JavaScript30).
## 01 - JavaScript Drum Kit
> [Demo](https://andy-techen.github.io/js30/01%20-%20JavaScript%20Drum%20Kit/index.html)
- `keydown` event
  - Fired when any key is pressed (unlike `keypress`)
  - Improve querySelector flexibility with CSS attribute selectors and ES6 template literals

    ```JavaScript
    document.querySelector(`audio[data-key="${e.key}"]`);
    ```
- `transitionend` event
  - Fired when a CSS transition has completed, css property found in `e.propertyName`
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
    /* <transition-property> <transition-duration>,
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
  - `change` event is triggered when `value` of `<input>`, `<select>`, or `<textarea>` is "committed", whereas mousemove is fired simultaneously upon movement
## 04 - Array Cardio Day 1
> [Demo](https://andy-techen.github.io/js30/04%20-%20Array%20Cardio%20Day%201/index.html)
- `Array.prototype.filter()`
  - Creates a new array with objects that return `true`

- `Array.prototype.sort()`
  ```JavaScript
  sort((`firstObj`, `secondObj`) => {
    `compareFunction` ? 1 : -1;
  });
  ```
  - If return > 0, sort `secondObj` to an index lower than `firstObj` (i.e. `secondObj` comes first), vice versa

- `Array.prototype.reduce()`
  ```JavaScript
  reduce((`accumulator`, `currentValue`) => {
    `reducerFunction`;
    return `single value/object`
  }, `initialValue`);
  ```