import { gql } from "apollo-server-express";

export const typeDefs = gql`
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
