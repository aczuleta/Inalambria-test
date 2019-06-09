"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    \n    extend type Query {\n        usuarios: [usuario]!,\n        usuario(id:ID!): usuario!,\n        userByUsername(username:String!):usuario!\n    }\n\n    extend type Mutation {\n        createUsuario(username:String!, fullname:String!, rol:String!): ID!,\n        updateUsuario(id:ID!, username:String!, fullname:String!, rol:String!, multado:Boolean): ID!,\n        deleteUsuario(id:ID!):ID!\n    }\n    \n    type usuario {\n        id: ID!\n        username: String!\n        fullname: String!\n        rol: String!\n        multado: Boolean!\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;