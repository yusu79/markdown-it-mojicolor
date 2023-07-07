# markdown-it-mojicolor
![GitHub](https://img.shields.io/github/license/yusu79/markdown-it-mojicolor)
![npm](https://img.shields.io/npm/dw/markdown-it-mojicolor)



The [markdown-it](https://l.pg1x.com/G6nd) plugin that allows you to change the text color of Markdown.

<!-- omit in toc -->
## TOC
- [Setup](#setup)
- [Quick usage](#quick-usage)
- [Usage](#usage)
- [Reference Site](#reference-site)
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
| Input                        | Render                                      | Description                                      | 
| ---------------------------- | ------------------------------------------- | ------------------------------------------------ | 
| `%Tomato%{tomato}`           | `<font color="tomato">Tomato</font>`        | Specified by color.                              | 
| `%Orange%{#ffa500}`          | `<font color="#ffa500">Orange</font>`       | Specified in hexadecimal.                        | 
| `%café au lait%{カフェオレ}` | `<font color="#946c45">café au lait</font>` | Specified in Japanese, converted to hexadecimal. | 

Doesn't work:
| Input                      | Render                                       | Description                  | 
| -------------------------- | -------------------------------------------- | ---------------------------- | 
| `%Aqua%{rgb(0,255,255)}`   | `<font color="rgb(0,255,255)">Aqua</font>`   | `<font>` does not support RGB. | 
| `%Bisque%{hsb(33,23,100)}` | `<font color="hsb(33,23,100)">Bisque</font>` | `<font>` does not support HSB. | 


## Usage
A markdown-it plugin that converts `%character%{color}` to `<font color="color">character</font>`.

Note that it only converts to `<font>`, so RGB and HSL cannot be used.

Colors should be specified as `color word` or  `hexadecimal`.

It also supports Japanese.
For example, if you specify "カフェオレ" meaning "café au lait", it will be converted to "#946c45", which closely resembles the color of café au lait.

To find out which colors are supported, refer to [Traditional Colors of Japan - Dictionary of Japanese Colors](https://l.pg1x.com/X3e4).



## Reference Site
- [Traditional Colors of Japan - Traditional Colors of Japan](https://l.pg1x.com/X3e4)
- [Traditional Colors of World](https://l.pg1x.com/eT5p)
- [Symbol Colors of Subway Metro Colors - Metro Colors](https://l.pg1x.com/kCcm)
- [Rail Colors](https://l.pg1x.com/iyJ7)

The original site (https://www.colordic.org/) has granted us permission to publish and use the site on OSS.



## Extensions
- [yusu79/vscode-markdown-mojicolor](https://l.pg1x.com/spq1)


