import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeContainer from '../components/HomeContainer'
import AuthorInfo from "../components/AuthorInfo";
import HomeFooterRender from "../components/HomeFooterRender";
import LoadingSpinner from "../components/LoadingSpinner";

const DogContainer = React.lazy(() => import('../components/VoxelDog'))
export default function Home() {
    const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
          <HomeContainer>
              <React.Suspense fallback={ <LoadingSpinner /> }>
                  <DogContainer />
              </React.Suspense>
              <AuthorInfo />
          </HomeContainer>
      </main>
        <HomeFooterRender/>
    </Layout>
  );
}
