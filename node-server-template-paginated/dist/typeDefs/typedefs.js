"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input ChatInput {
    title: String
    desc: String
  }
  type PagOpt {
    totalDocs: Int
    limit: Int
    page: Int
    totalPages: Int
    pagingCounter: Int
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
  }

  type Chat {
    title: String
    desc: String
    id: ID
  }
  type Error {
    message: String
  }
  type ChatResponse {
    chat: Chat
    error: Error
  }
  type PagedChatResponse {
    chats: [Chat]
    pagopt: PagOpt
  }
  type Query {
    chats: [Chat]
    pagChats(limit: Int, page: Int): PagedChatResponse
  }

  type Mutation {
    addChat(input: ChatInput): ChatResponse
    updateChat(input: ChatInput, id: ID): ChatResponse
    deleteChat(id: ID): Boolean
  }
`;
//# sourceMappingURL=typedefs.js.map