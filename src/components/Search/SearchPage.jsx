import React, { PureComponent } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Layout from '../Layout';
import SearchHead from './SearchHead';
import SearchResults from './SearchResults';
import Placeholder from './Placeholder';

const SEARCH_BOOK_TITLE = gql`
   query getBookByTitle($query: String!) {
      search_title(title: $query) {
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

class SearchPage extends PureComponent {
   constructor() {
      super();
      this.state = {
         count: 0
      }
   };

   render() {
      const query = this.props.location.state.search || '';
      return (
         <Layout history={this.props.history}>
            <SearchHead query={query} count={this.state.count} />
            <Query query={SEARCH_BOOK_TITLE} variables={{query}} fetchPolicy="no-cache">
               {({ data, loading, error }) => {
                  if (loading) return <Placeholder style={'row'} />;
                  if (error) return `Sorry nothing found for: ${query}`;

                  this.setState({ count: data.search_title.length });                 
                  return <SearchResults results={data.search_title} />
               }}
            </Query>
         </Layout>
      )
   }
};

export default SearchPage;