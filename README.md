# markdown-it-mojicolor
![GitHub](https://img.shields.io/github/license/yusu79/markdown-it-mojicolor)
![npm](https://img.shields.io/npm/v/markdown-it-mojicolor)
![npm](https://img.shields.io/npm/dw/markdown-it-mojicolor)



The [markdown-it](https://l.pg1x.com/G6nd) plugin that allows you to change the text color of Markdown.

<!-- omit in toc -->
## TOC
- [Setup](#setup)
- [Quick usage](#quick-usage)
- [Usage](#usage)
- [Reference Website](#reference-website)
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
| Input                        | Render                                                 | Description                                      | 
| ---------------------------- | ------------------------------------------------------ | ------------------------------------------------ | 
| `%Tomato%{tomato}`           | `<span style="color: tomato;">Tomato</span>`           | Specified by color.                              | 
| `%Orange%{#ffa500}`          | `<span style="color: #ffa500;">Orange</span>`          | Specified in hexadecimal.                        | 
| `%café au lait%{カフェオレ}` | `<span style="color: #946c45;">café au lait</span>`    | Specified in Japanese, converted to hexadecimal. | 
| `%Aqua%{rgb(0,255,255)}`     | `<span style="color: rgb(0,255,255);">Aqua</span>`     | Specified in RGB.                                | 
| `%Bisque%{hsl(33,100%,88%)}` | `<span style="color: hsl(33,100%,88%);">Bisque</span>` | Specified in HSL.                                | 


## Usage
A markdown-it plugin that converts `%character%{color}` to `<span style="color: color">character</span>`.


Colors should be specified as `color word`, `hexadecimal`, `RGB` or `HSL`.


It also supports Japanese.
For example, if you specify `カフェオレ` meaning `café au lait`, it will be converted to `#946c45`, which closely resembles the color of café au lait.

To find out which colors are supported, refer to [Traditional Colors of Japan - Dictionary of Japanese Colors](https://l.pg1x.com/X3e4).



## Reference Website
- [Traditional Colors of Japan - Traditional Colors of Japan](https://l.pg1x.com/X3e4)
- [Traditional Colors of World](https://l.pg1x.com/eT5p)
- [Symbol Colors of Subway Metro Colors - Metro Colors](https://l.pg1x.com/kCcm)
- [Rail Colors](https://l.pg1x.com/iyJ7)

The original site (https://www.colordic.org/) has granted us permission to publish and use the site on OSS.



## Extensions
- [yusu79/vscode-markdown-mojicolor](https://l.pg1x.com/spq1)


