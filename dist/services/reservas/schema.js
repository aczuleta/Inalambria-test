"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _graphqlIsoDate = require("graphql-iso-date");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    \n\n    extend type Query {\n        reservas: [reserva]!,\n        reserva(id:ID!): reserva!,\n        reservasUsuario(usuario:ID!):[reserva]!,\n        reservasLibro(libro:ID!):[reserva]!\n    }\n\n    extend type Mutation {\n        createReserva(idPersona:Int!, idLibro:Int!): ID!,\n        returnBook(id:ID!): ID!,\n        deleteReserva(id:ID!):ID!\n    }\n\n    type reserva {\n        id: ID!\n        idPersona: Int!\n        idLibro: Int!,\n        persona: usuario!,\n        libro: book!\n        fechaCheckout: String!, \n        fechaRetorno: String!, \n        fechaRetornado: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _apolloServerExpress.gql)(_templateObject());

exports["default"] = _default;