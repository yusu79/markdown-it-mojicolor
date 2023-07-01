# markdown-it-mojicolor
![GitHub](https://img.shields.io/github/license/yusu79/markdown-it-mojicolor)
![npm](https://img.shields.io/npm/dw/markdown-it-mojicolor)



The [markdown-it](https://l.pg1x.com/G6nd) plugin that allows you to change the text color of Markdown.

<!-- omit in toc -->
## TOC
- [Setup](#setup)
- [Quick usage](#quick-usage)
- [Usage](#usage)
- [Extensions](#extensions)

## Setup
Install via npm:

```bash
npm install markdown-it-mojicolor
```

Use with markdown-it:

```js
const 
    md = require('markdown-it')(),
    plugin = require("markdown-it-mojicolor");

md.use(plugin);
```

## Quick usage
Works:
| Input               | Render                                | 
| ------------------- | ------------------------------------- | 
| `%Tomato%{tomato}`  | `<font color="tomato">Tomato</font>`  | 
| `%Orange%{#ffa500}` | `<font color="#ffa500">Orange</font>` | 

Doesn't work:
| Input                      | Render                                       | Description                  | 
| -------------------------- | -------------------------------------------- | ---------------------------- | 
| `%Aqua%{rgb(0,255,255)}`   | `<font color="rgb(0,255,255)">Aqua</font>`   | `<font>` does not support RGB. | 
| `%Bisque%{hsb(33,23,100)}` | `<font color="hsb(33,23,100)">Bisque</font>` | `<font>` does not support HSB. | 


## Usage
A markdown-it plugin that converts `%character%{color}` to `<font color="color">character</font>`.

Note that it only converts to `<font>`, so RGB and HSL cannot be used.

Colors should be specified as `color word` or  `hexadecimal`.


## Extensions
- [yusu79/vscode-markdown-mojicolor](https://l.pg1x.com/spq1)


