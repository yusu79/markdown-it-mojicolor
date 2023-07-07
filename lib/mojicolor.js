"use strict";
/*  Original code: [iltrof/furigana-markdown-it: Furigana plugin for markdown-it](https://l.pg1x.com/RzEF)
    * 
    * MIT License (MIT)
    * 
    * Copyright (c) 2020 Ilya Trofimov
    * 
    * オリジナルコードの`lib/ruby.js`からparse関数とaddTag関数をコピーし､改変して実装している｡
    * 
    * 以下、主な改変部分の説明｡
    * 1. parse関数で切り出す記号を`[`と`]`から`%`に変更している｡
    * 2. 出力する変数を`toptext`から`color`に変更している｡
    * 3. `addTag`関数を`pushTag`に名前の変更している｡
*/

const fs = require("fs");

/* function parse(state) {} の説明
    * %body%{color}の構文を解析して､bodyとcolorの部分を返します。
    *
    * @引数
    * state:Markdown文書全体の情報
    * 
    * @returns { 
    *  body: string,
    *  color: string, 
    *  nextPos: int
    * }
    * body: <font color="色"><font>で囲まれた部分。
    * color：  <font color="色"><font>の色の部分。
    * nextPos：`}`の次の文字のインデックス。
*/
function parse(state) {
    if (state.src.charAt(state.pos) !== "%") {
        return null;
    }

    const 
        bodyStartPercent = state.pos, 
        bodyEndPercent = state.src.indexOf("%", bodyStartPercent+1), 
        colorStartBracket = bodyEndPercent + 1, 
        colorEndBracket = state.src.indexOf("}", colorStartBracket),
        body = state.src.slice(bodyStartPercent + 1, bodyEndPercent),
        color = state.src.slice(colorStartBracket + 1, colorEndBracket),
        nextPos = colorEndBracket+1;


    // nullを返す条件
    if (colorEndBracket === -1 || colorEndBracket >= state.posMax) {
        return null;
    }
    if (
        bodyEndPercent === -1 ||
        bodyEndPercent >= state.posMax ||
        state.src.charAt(bodyEndPercent + 1) !== "{"
    ) {
        return null;
    }
    if (body.trim() === "" || color.trim() === "") {
        return null;
    }

    // nullを返さない時の正式な出力
    return {
        body: body,
        color: color,
        nextPos: nextPos
    };
}

/* function pushTag(state, content) {} の説明
    * 文字と色を受け取り､<font>タグを生成します｡
    *
    * @引数
    * state: Markdown文書全体の情報
    * content: 文字と色を格納した配列
    * 
    * 例
    * pushTag(state, ["猫", "white"])
    *  <font color="white">猫</font>となる
*/
function pushTag(state, content) {
    function pushText(text) {
        const token = state.push("text", "", 0);
        token.content = text;
    }

    const 
        color_open = state.push("span_open", "span", 1), 
        body = content[0],
        color = content[1],
        hex = convertColorToHex(color);
    
    color_open.attrPush(["style","color: "+hex+";"])
    pushText(body);
    state.push("span_close", "span", -1);
}


function convertColorToHex(color) {
    const colorsData = ['./data/jp_colors.json',"./data/intl_colors.json","./data/metro_colors.json","./data/rail_colors.json"];
    
    for (const colorsFile of colorsData ) {
        const 
            colors = JSON.parse(fs.readFileSync(colorsFile, 'utf-8')),
            hexCode = colors[color];

        if (hexCode) {
            return hexCode;
        }
    }

    return color;
}



function mojicolor(state, silent) {
    const moji = parse(state);
    if (moji === null) {
        return false;
    }

    state.pos = moji.nextPos;
    if (silent) {
        return true;
    }
    pushTag(state, [moji.body,moji.color]);
    return true;
}



module.exports = mojicolor;
