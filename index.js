"use strict";

const foregroundColor = "#F0F3F5";
const backgroundColor = "#282A36";
const black = "#44475a";
const red = "#FF3B30";
const green = "#4CD964";
const yellow = "#F8E71C";
const blue = "#3672F8";
const pink = "#E1467C";
const turquoise = "#14F1D9";
const gray = "#CCCCCC";
const brightBlack = "#999999";
const brightWhite = "#ffffff";
const purple = "#7B42F6";

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        fontSize: 14,
        backgroundColor,
        foregroundColor,
        borderColor: black,
        cursorColor: blue,
        selectionColor: purple,
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

            // bright
            brightBlack,
            brightWhite
        },
        css: `
        ${config.css || ""}
            .tabs_list .tab_tab.tab_active .tab_text  {
                background: ${backgroundColor};
            }
            .tab_active:before {
                border-color: rgb(68, 71, 90);
            }
        `
    });
};
