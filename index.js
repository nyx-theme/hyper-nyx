'use strict'

// Hyper-nyx theme v0.1.0
const fs = require('fs')
const path = require('path')

const styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf-8')

const foregroundColor = '#F6F7F7'
const backgroundColor = '#161A37'
const black = '#0A2463'
const red = '#F24024'
const green = '#60F1C8'
const yellow = '#FFC400'
const blue = '#0085E3'
const pink = '#FF375F'
const turquoise = '#00A89D'
const gray = '#E5E5E5'
const brightBlack = '#0A2463'
const brightWhite = '#ffffff'
const purple = '#825DDE'

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
