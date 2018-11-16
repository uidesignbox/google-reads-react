import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Layout from '../Layout';
import SearchHead from './SearchHead';
import SearchResults from './SearchResults';
import HTMLPlaceholder from './HTMLPlaceholder';

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
               authors {
                  name
               }
               language
               publisher
               published_date
               page_count
               categories {
                  name
               }
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
            <Query query={SEARCH_BOOK_TITLE} fetchPolicy="no-cache">
               {({ data, loading, error }) => {
                  if (loading) return <HTMLPlaceholder />;
                  if (error) return `Sorry nothing found for: ${query}`;
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