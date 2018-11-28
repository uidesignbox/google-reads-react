import React, { PureComponent } from 'react';
import FeaturedList from './FeaturedList';
import Layout from '../Layout';
import IndexCollections from './IndexCollections';
import SearchContainer from './SearchContainer';

class IndexPage extends PureComponent {
   render() {
      return (
         <Layout>
            <FeaturedList />
            <IndexCollections />
            <SearchContainer />
         </Layout>
      )
   }
};

export default IndexPage;