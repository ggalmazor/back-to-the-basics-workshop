// Self-executing function
(function () {
  console.log("Ohai!");
})();

// NodeJS module wrapper function:
(function (exports, require, module, __filename, __dirname) {
  console.log(arguments);
})(exports, require, module, __filename, __dirname);
