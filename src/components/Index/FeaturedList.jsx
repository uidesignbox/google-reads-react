import React, { PureComponent } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ListItem from './FeaturedListItem';
import Placeholder from '../Search/Placeholder';
import ErrorMessage from '../Search/ErrorMessage';

const GET_BOOK_LIST = gql`
   query BookCarouselQuery($title: String!) {
      book_list(title: $title, limit: 5) {
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

class FeaturedList extends PureComponent {
   render() {
      const title = "science";
      const Title = () => <h2 className="carousel__title">New Books List</h2>;
      return (
         <div className="carousel__book-container">
            <Title />
            <Query query={GET_BOOK_LIST} variables={{title}}>
               {({ data, loading, error }) => {
                  if (loading) return <Placeholder style={'row'} />;
                  if (error) return <ErrorMessage message={'There was an error'} />;
                  return <ul className="carousel__book-list">
                     {data.book_list.map((item, i) => 
                        <ListItem
                           key={i}
                           productUrl={item.amazon_product_url}
                           isbns={item.isbns[0]}
                           title={item.details.title}
                           detail={item}
                           contributor={item.details.contributor}
                           images={item.details.book_image} 
                        />
                     )}
                  </ul>
               }}
            </Query>
         </div>
      )
   }
};

export default FeaturedList;