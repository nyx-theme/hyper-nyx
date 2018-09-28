'use strict'

// Hyper-nyx theme v0.0.6
const fs = require('fs')
const path = require('path')

const styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf-8')

const foregroundColor = '#F0F3F5'
const backgroundColor = '#282A36'
const black = '#44475a'
const red = '#FF3B30'
const green = '#4CD964'
const yellow = '#F8E71C'
const blue = '#3672F8'
const pink = '#E1467C'
const turquoise = '#14F1D9'
const gray = '#CCCCCC'
const brightBlack = '#999999'
const brightWhite = '#ffffff'
const purple = '#7B42F6'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    fontFamily:
      '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    fontSize: 14,
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: blue,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      pink,
      turquoise,
      gray,
      purple,

      // Light
      magenta: turquoise,
      cyan: turquoise,
      white: foregroundColor,
      lightBlack: brightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: turquoise,
      lightCyan: turquoise,
      lightWhite: brightWhite
    },
    css: (config.css || '') + styles
  })
}
