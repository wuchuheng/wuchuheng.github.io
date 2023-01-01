import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomeContainer from "../components/HomeContainer";
import AuthorInfo from "../components/AuthorInfo";
import HomeFooterRender from "../components/HomeFooterRender";
import DogContainer from "../components/DogContainer/DogContainer";
import { apolloClientForNotion } from "../utils/apolloClicent";
import { ApolloProvider } from "@apollo/client";

const NotionFeature: React.FC = () => {
  return <></>;
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ApolloProvider client={apolloClientForNotion}>
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
