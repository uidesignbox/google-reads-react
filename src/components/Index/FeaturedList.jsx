import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ListItem from './FeaturedListItem';

class FeaturedList extends Component {
   render() {
      const Title = () => <h2 className="carousel__title">New Books List</h2>;
      return (
         <div className="carousel__book-container">
            <Title />
            <Query query={GET_BOOK_LIST}>
               {({ loading, data }) => {
                  return <ul className="carousel__book-list">
                     {data.book_list &&
                        data.book_list.map((item, i) => 
                           <ListItem key={i} detail={item.details[0]} product={item.amazon_product_url} isbns={item.isbns[0]} />
                     )}
                  </ul>
               }}
            </Query>
         </div>
      )
   }
};

export default FeaturedList;

const GET_BOOK_LIST = gql`
{
   book_list {
      amazon_product_url
      details {
         title
         contributor
         primary_isbn13
         primary_isbn10
     }
     isbns {
         isbn10
         isbn13
      }
   }
}
`