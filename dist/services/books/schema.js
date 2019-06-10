"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    \n    extend type Query {\n        books: [book]!,\n        book(id:ID!): book!\n    }\n\n    extend type Mutation {\n        createBook(title:String!, ISBN:String!, quantity:Int!, genre:String!, author:String!, pages:Int!, cover:String): ID!,\n        updateBook(id:ID!, title:String!, ISBN:String!, quantity:Int!, genre:String!, author:String!, pages:Int!): ID!,\n        deleteBook(id:ID!):ID!\n    }\n    \n    type book {\n        id: ID!\n        title: String!\n        ISBN: String!\n        quantity: Int!\n        genre: String!\n        author: String!\n        pages: Int!\n        cover:String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;