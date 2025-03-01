"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//En esta parte del proyecto es la tienda 
var configureStore = function configureStore() {
  return (0, _redux.createStore)(_reducers["default"]);
};

var store = configureStore();
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=store.dev.js.map
