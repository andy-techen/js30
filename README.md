# JavaScript30
Notes for 30 Day JavaScript Challenge by [Wes Bos](https://github.com/wesbos/JavaScript30).
## 01 - JavaScript Drum Kit
> [Demo](https://andy-techen.github.io/js30/01%20-%20JavaScript%20Drum%20Kit/index.html)
- `keydown` event
  - Fired when any key is pressed (unlike `keypress`)
  - Improve querySelector flexibility with CSS attribute selectors and ES6 template literals
  ```JavaScript
  document.querySelector(`audio[data-key="${e.key}"]`)
  ```
- `transitionend` event
  - Fired when a CSS transition has completed, css property found in `e.propertyName`
- Playing `audio`
  - Setting `audio.currentTime = 0` rewinds the audio
  - Play `audio` by simply calling `audio.play()`
