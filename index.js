"use strict";

module.exports = function(md) {
    return md.inline.ruler.push("mojicolor", require("./lib/mojicolor"));
};
