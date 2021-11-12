import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import VoxelDog from '../components/VoxelDog'
import HomeContainer from '../components/HomeContainer'
import AuthorInfo from "../components/AuthorInfo";
import HomeFooterRender from "../components/HomeFooterRender";

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
          <HomeContainer>
              <VoxelDog />
              <AuthorInfo />
          </HomeContainer>
      </main>
        <HomeFooterRender/>
    </Layout>
  );
}
