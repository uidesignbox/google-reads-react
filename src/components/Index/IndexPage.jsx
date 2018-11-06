import React, { Component } from 'react';
import FeaturedList from './FeaturedList';
import Layout from '../Layout';

class IndexPage extends Component {
   render() {
      return (
         <Layout>
            <FeaturedList />
         </Layout>
      )
   }
};

export default IndexPage;