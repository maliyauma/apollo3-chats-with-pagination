import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Chat = {
  __typename?: 'Chat';
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type ChatInput = {
  desc?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ChatResponse = {
  __typename?: 'ChatResponse';
  chat?: Maybe<Chat>;
  error?: Maybe<Error>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addChat?: Maybe<ChatResponse>;
  deleteChat?: Maybe<Scalars['Boolean']>;
  updateChat?: Maybe<ChatResponse>;
};


export type MutationAddChatArgs = {
  input?: InputMaybe<ChatInput>;
};


export type MutationDeleteChatArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateChatArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<ChatInput>;
};

export type PagOpt = {
  __typename?: 'PagOpt';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PagedChatResponse = {
  __typename?: 'PagedChatResponse';
  chats?: Maybe<Array<Maybe<Chat>>>;
  pagopt?: Maybe<PagOpt>;
};

export type Query = {
  __typename?: 'Query';
  chats?: Maybe<Array<Maybe<Chat>>>;
  pagChats?: Maybe<PagedChatResponse>;
};


export type QueryPagChatsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type RegularChatFragment = { __typename?: 'Chat', title?: string | null | undefined, desc?: string | null | undefined, id?: string | null | undefined };

export type RegularPagOptFragment = { __typename?: 'PagOpt', totalDocs?: number | null | undefined, limit?: number | null | undefined, page?: number | null | undefined, totalPages?: number | null | undefined, pagingCounter?: number | null | undefined, hasPrevPage?: boolean | null | undefined, hasNextPage?: boolean | null | undefined, prevPage?: number | null | undefined, nextPage?: number | null | undefined };

export type AddChatMutationVariables = Exact<{
  input?: InputMaybe<ChatInput>;
}>;


export type AddChatMutation = { __typename?: 'Mutation', addChat?: { __typename?: 'ChatResponse', chat?: { __typename?: 'Chat', title?: string | null | undefined, desc?: string | null | undefined, id?: string | null | undefined } | null | undefined, error?: { __typename?: 'Error', message?: string | null | undefined } | null | undefined } | null | undefined };

export type DeleteChatMutationVariables = Exact<{
  Id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteChatMutation = { __typename?: 'Mutation', deleteChat?: boolean | null | undefined };

export type UpdateChatMutationVariables = Exact<{
  input?: InputMaybe<ChatInput>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateChatMutation = { __typename?: 'Mutation', updateChat?: { __typename?: 'ChatResponse', chat?: { __typename?: 'Chat', title?: string | null | undefined, desc?: string | null | undefined, id?: string | null | undefined } | null | undefined, error?: { __typename?: 'Error', message?: string | null | undefined } | null | undefined } | null | undefined };

export type ChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChatsQuery = { __typename?: 'Query', chats?: Array<{ __typename?: 'Chat', title?: string | null | undefined, desc?: string | null | undefined, id?: string | null | undefined } | null | undefined> | null | undefined };

export type PagChatsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type PagChatsQuery = { __typename?: 'Query', pagChats?: { __typename?: 'PagedChatResponse', chats?: Array<{ __typename?: 'Chat', title?: string | null | undefined, desc?: string | null | undefined, id?: string | null | undefined } | null | undefined> | null | undefined, pagopt?: { __typename?: 'PagOpt', totalDocs?: number | null | undefined, limit?: number | null | undefined, page?: number | null | undefined, totalPages?: number | null | undefined, pagingCounter?: number | null | undefined, hasPrevPage?: boolean | null | undefined, hasNextPage?: boolean | null | undefined, prevPage?: number | null | undefined, nextPage?: number | null | undefined } | null | undefined } | null | undefined };

export const RegularChatFragmentDoc = gql`
    fragment RegularChat on Chat {
  title
  desc
  id
}
    `;
export const RegularPagOptFragmentDoc = gql`
    fragment RegularPagOpt on PagOpt {
  totalDocs
  limit
  page
  totalPages
  pagingCounter
  hasPrevPage
  hasNextPage
  prevPage
  nextPage
}
    `;
export const AddChatDocument = gql`
    mutation AddChat($input: ChatInput) {
  addChat(input: $input) {
    chat {
      ...RegularChat
    }
    error {
      message
    }
  }
}
    ${RegularChatFragmentDoc}`;
export type AddChatMutationFn = Apollo.MutationFunction<AddChatMutation, AddChatMutationVariables>;

/**
 * __useAddChatMutation__
 *
 * To run a mutation, you first call `useAddChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChatMutation, { data, loading, error }] = useAddChatMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddChatMutation(baseOptions?: Apollo.MutationHookOptions<AddChatMutation, AddChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddChatMutation, AddChatMutationVariables>(AddChatDocument, options);
      }
export type AddChatMutationHookResult = ReturnType<typeof useAddChatMutation>;
export type AddChatMutationResult = Apollo.MutationResult<AddChatMutation>;
export type AddChatMutationOptions = Apollo.BaseMutationOptions<AddChatMutation, AddChatMutationVariables>;
export const DeleteChatDocument = gql`
    mutation DeleteChat($Id: ID) {
  deleteChat(id: $Id)
}
    `;
export type DeleteChatMutationFn = Apollo.MutationFunction<DeleteChatMutation, DeleteChatMutationVariables>;

/**
 * __useDeleteChatMutation__
 *
 * To run a mutation, you first call `useDeleteChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChatMutation, { data, loading, error }] = useDeleteChatMutation({
 *   variables: {
 *      Id: // value for 'Id'
 *   },
 * });
 */
export function useDeleteChatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChatMutation, DeleteChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChatMutation, DeleteChatMutationVariables>(DeleteChatDocument, options);
      }
export type DeleteChatMutationHookResult = ReturnType<typeof useDeleteChatMutation>;
export type DeleteChatMutationResult = Apollo.MutationResult<DeleteChatMutation>;
export type DeleteChatMutationOptions = Apollo.BaseMutationOptions<DeleteChatMutation, DeleteChatMutationVariables>;
export const UpdateChatDocument = gql`
    mutation UpdateChat($input: ChatInput, $id: ID) {
  updateChat(input: $input, id: $id) {
    chat {
      ...RegularChat
    }
    error {
      message
    }
  }
}
    ${RegularChatFragmentDoc}`;
export type UpdateChatMutationFn = Apollo.MutationFunction<UpdateChatMutation, UpdateChatMutationVariables>;

/**
 * __useUpdateChatMutation__
 *
 * To run a mutation, you first call `useUpdateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChatMutation, { data, loading, error }] = useUpdateChatMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateChatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatMutation, UpdateChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChatMutation, UpdateChatMutationVariables>(UpdateChatDocument, options);
      }
export type UpdateChatMutationHookResult = ReturnType<typeof useUpdateChatMutation>;
export type UpdateChatMutationResult = Apollo.MutationResult<UpdateChatMutation>;
export type UpdateChatMutationOptions = Apollo.BaseMutationOptions<UpdateChatMutation, UpdateChatMutationVariables>;
export const ChatsDocument = gql`
    query Chats {
  chats {
    ...RegularChat
  }
}
    ${RegularChatFragmentDoc}`;

/**
 * __useChatsQuery__
 *
 * To run a query within a React component, call `useChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatsQuery(baseOptions?: Apollo.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
      }
export function useChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
        }
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsLazyQueryHookResult = ReturnType<typeof useChatsLazyQuery>;
export type ChatsQueryResult = Apollo.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const PagChatsDocument = gql`
    query PagChats($limit: Int, $page: Int) {
  pagChats(limit: $limit, page: $page) {
    chats {
      ...RegularChat
    }
    pagopt {
      ...RegularPagOpt
    }
  }
}
    ${RegularChatFragmentDoc}
${RegularPagOptFragmentDoc}`;

/**
 * __usePagChatsQuery__
 *
 * To run a query within a React component, call `usePagChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagChatsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePagChatsQuery(baseOptions?: Apollo.QueryHookOptions<PagChatsQuery, PagChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagChatsQuery, PagChatsQueryVariables>(PagChatsDocument, options);
      }
export function usePagChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagChatsQuery, PagChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagChatsQuery, PagChatsQueryVariables>(PagChatsDocument, options);
        }
export type PagChatsQueryHookResult = ReturnType<typeof usePagChatsQuery>;
export type PagChatsLazyQueryHookResult = ReturnType<typeof usePagChatsLazyQuery>;
export type PagChatsQueryResult = Apollo.QueryResult<PagChatsQuery, PagChatsQueryVariables>;