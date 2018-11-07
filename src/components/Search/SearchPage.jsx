import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Layout from '../Layout';
import SearchHead from './SearchHead';
import SearchResults from './SearchResults';

class SearchPage extends Component {
   constructor() {
      super();
      this.state = {
         count: ''
      }
   }

   render() {
      const query = this.props.location.state.search || '';
      const SEARCH_BOOK_TITLE = gql`
      {
         search_title(title: "${query}") {
            volume_info {
               title
               subtitle
               description
               authors
               language
               publisher
               published_date
               page_count
               categories
               images {
                  small
                  normal
               }
            }
         }
      }
      `
      return (
         <Layout history={this.props.history}>
            <SearchHead query={query} count={this.state.count} />
            <Query query={SEARCH_BOOK_TITLE}>
               {({ data, loading }) => {
                  // Add HTML placeholder content
                  if (loading) return 'hold up';
                  return (
                     <SearchResults results={data.search_title} />
                  )
               }}
            </Query>
         </Layout>
      )
   }
};

export default SearchPage;