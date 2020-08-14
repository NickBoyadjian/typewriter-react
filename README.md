# typewriter-react

> React component to simulate typing

[![NPM](https://img.shields.io/npm/v/typewriter-react.svg)](https://www.npmjs.com/package/typewriter-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

npm
```bash
npm install --save typewriter-react
```

yarn
```bash
yarn add typewriter-react
```

## Usage

```jsx
import React, { Component } from 'react'

import TypeWriter from 'typewriter-react'

class Example extends Component {
  render() {
    return <TypeWriter 
      input={[
        "Hello, world!",
        {"pause": 5}
        {"delete": 6},
        "World! 🤓"
      ]}
      
      speed={75}
      cursor={true}
      cursorChar="|"
    />
  }
}
```

## Props

| Name       | Type    | Description                                                                                                                                                                                                                                                                                                                                |
|------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input      | Array   | Input takes an array of steps to perform. Pass in strings for the text you want to print. If you want to pause, pass an object with a "pause" key, and a value of how many intervals you want to pause for. If you want to delete characters, pass in an object with a "delete" key and a value of how many characters you want to delete. |
| speed      | Int     | Speed is an integer for how many milliseconds each step takes.                                                                                                                                                                                                                                                                             |
| cursor     | Boolean | Determines whether or not to display a blinking cursor.                                                                                                                                                                                                                                                                                    |
| cursorChar | String  | The string used for the cursor. Defaults to "\|".                                                                                                                                                                                                                                                                                          |

## License

MIT © [nickboyadjian](https://github.com/nickboyadjian)
