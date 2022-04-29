// Self-executing function
(function () {
  console.log("Ohai!");
})();

// NodeJS module wrapper function:
(function (exports, require, module, __filename, __dirname) {
  console.log(arguments);
})(exports, require, module, __filename, __dirname);



// fichero globals.js

window.globalState = {};

(function(globals) {

})(window.globalState)

// fichero cocotero.js

(function(globals) {

  console.log(globals.a);

})(window.globalState)

// fichero chuchu.js

(function(globals) {

globals.a = 33;

})(window.globalState)



// fichero globals.mjs

const globals = {
  a: 33
};

export default globals;

// fichero cocotero.mjs

import {a} from 'globals.mjs';
import {b} from 'chuchu.mjs';

console.log(a, b);

// fichero chuchu.mjs

export default {
  b: 42
}

