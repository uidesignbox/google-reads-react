import React, { PureComponent } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import CollectionItem from './CollectionItem';

const GET_CATEGORY_BOOK = gql`
   query BookCollectionQuery($title: String!) {
      book_list(title: $title, limit: 9) {
         amazon_product_url
         details {
            title
            contributor
            primary_isbn13
            primary_isbn10
            book_image {
               small
               normal
            }
         }
         isbns {
            isbn10
            isbn13
         }
      }
   }
`

class IndexCollections extends PureComponent {
   render() {
      const title = 'trade-fiction-paperback';
      return (
         <div className="collections__container">
            <Query query={GET_CATEGORY_BOOK} variables={{title}}>
               {({ data, loading, error }) => {
                  if (loading) return 'loading';
                  if (error) return 'error';
                  return (
                     data.book_list.map((item, i) => item.details.book_image &&
                        <CollectionItem 
                           key={i} 
                           isbns={item.isbns} 
                           images={item.details.book_image} 
                           title={item.details.title}
                           product={item.amazon_product_url}
                        />
                     )
                  )
               }}
            </Query>
         </div>
      )
   }
};


export default IndexCollections;