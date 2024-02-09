import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomeContainer from "../components/HomeContainer";
import AuthorInfo from "../components/AuthorInfo";
import HomeFooterRender from "../components/HomeFooterRender";
import DogContainer from "../components/DogContainer/DogContainer";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
  split,
  useSubscription,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const url: string = "http://127.0.0.1:3000/graphql";
const wsUrl: string ="ws://127.0.0.1:3000/graphql"
const httpLink = new HttpLink({
    uri: url,
});

const splitLink =
  typeof window !== "undefined"
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        new GraphQLWsLink(
          createClient({
            url: wsUrl,
          })
        ),
        httpLink
      )
    : httpLink;
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const NotionFeature: React.FC = () => {
  const NOTION_SUBSCRIPTION = gql`
    subscription {
      authors {
        id
        name
      }
    }
  `;
  const { data, loading } = useSubscription(NOTION_SUBSCRIPTION);
  if (!loading) {
      console.log(data)
    // const { id, title, content } = data.newMessage;
    const notification = new Notification("title", {
      icon: "https://wuchuheng.com/img/icons-96x96.png",
      body: "hello: content",
    });
    notification.onclick = function () {
      window.open("https://wuchuheng.com");
    };
  }

  return <></>;
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ApolloProvider client={client}>
      <NotionFeature />
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <main>
          <HomeContainer>
            <DogContainer />
            <AuthorInfo />
          </HomeContainer>
        </main>
        <HomeFooterRender />
      </Layout>
    </ApolloProvider>
  );
}
