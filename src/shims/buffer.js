'use strict';

// Browser stand-in for Node's built-in `buffer` module. stdlib's `@stdlib/buffer/ctor` detects that
// Node's Buffer is unavailable and switches to its own polyfill, so an empty module is enough here.
module.exports = {};
