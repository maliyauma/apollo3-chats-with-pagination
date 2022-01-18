import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//@ts-ignore
const cache = new InMemoryCache({
  typePolicies: {
    Person: {
      fields: {
        // name:{
        // read(existing){
        //       console.log("existing person  ====== ",existing)
        //     }
        //   }
      },
    },
    Hello: {
      fields: {
        // name:{
        //   read(existing){
        //     console.log("existing helllo  ====== ",existing)
        //   }
        // }
      },
    },
    Query: {
      fields: {
        pagChats: {
          read(existing) {
            console.log("existing chat  ====  ", existing);
            return existing;
          },
          merge(existing, incoming) {
            console.log(
              "existing/incoming clients merge  ====  ",
              existing,
              incoming
            );
            const pagopt = incoming.pagopt;
            const existingArr = existing?.chats ? existing?.chats.slice(0) : [];
            const chats = existingArr;

            if (incoming) {
              console.log("incoming exist");
              for (let i = 0; i < incoming.chats.length; ++i) {
                console.log(existingArr.length);
                console.log(incoming?.chats[i]);
                chats.push(incoming?.chats[i]);
              }
            } else if (existingArr.length >= 3) {
              console.log("no existing exist");
              for (let i = 3; i < incoming.chats.length; ++i) {
                console.log(incoming?.chats[i]);
                chats.push(incoming?.chats[i]);
              }
            }

            const merged = { chats, __typename: "ShortList", pagopt };
            console.log("merged fields are   ======== ", merged);
            return merged;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
