
## With webpack 5.55.0+

```
$ yarn
$ yarn webpack
````
## In another terminal
```$ cat dist/main.js | grep "const symbol"

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"symbol\": () => (/* binding */ symbol)\n/* harmony export */ });\nconst symbol = 'foo';\n\n//# sourceURL=webpack:///./node_modules/testing-package/index.js?");
### Notice const symbol = 'foo'

### Alter package and version
sed -i '' 's/foo/bar/g' testing-package/index.js && sed -i '' 's/2.0.1/2.0.2/' testing-package/package.json

$ cat dist/main.js | grep "const symbol"
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"symbol\": () => (/* binding */ symbol)\n/* harmony export */ });\nconst symbol = 'foo';\n\n//# sourceURL=webpack:///./node_modules/testing-package/index.js?");
### Notice const symbol = 'foo'
```

## With webpack 5.54.0

```
$ yarn add webpack@5.54.0 --dev
$ yarn webpack
```

## In another terminal
```
$ cat dist/main.js | grep "const symbol"

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"symbol\": () => (/* binding */ symbol)\n/* harmony export */ });\nconst symbol = 'foo';\n\n//# sourceURL=webpack:///./node_modules/testing-package/index.js?");
### Notice const symbol = 'foo'

### Alter package and version
sed -i '' 's/foo/bar/g' testing-package/index.js && sed -i '' 's/2.0.1/2.0.2/' testing-package/package.json

$ cat dist/main.js | grep "const symbol"
"const symbol"eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"symbol\": () => (/* binding */ symbol)\n/* harmony export */ });\nconst symbol = 'bar';\n\n//# sourceURL=webpack:///./node_modules/testing-package/index.js?");
### Notice const symbol = 'bar'
```

