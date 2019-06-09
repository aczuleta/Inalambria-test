"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = _interopRequireDefault(require("../services/books/schema"));

var _schema2 = _interopRequireDefault(require("../services/usuarios/schema"));

var _schema3 = _interopRequireDefault(require("../services/reservas/schema"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dirServices = '../services';
var linkSchema = (0, _apolloServerExpress.gql)(_templateObject());
var _exports = [linkSchema];
var _default = [linkSchema, _schema["default"], _schema2["default"], _schema3["default"]];
exports["default"] = _default;