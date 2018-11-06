import React, { Component, Fragment } from 'react';
import Layout from '../Layout';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import DetailHead from './DetailHead';
import DetailDescription from './DetailDescription';
import DetailMetaContent from './DetailMetaContent';


class DetailPage extends Component {
   render() {
      const GET_BOOK_DETAILS = gql`
      {
         search_isbn(isbn: "${this.props.location.state.isbns.isbn10}") {
            volume_info {
               title
               subtitle
               description
               authors
               language
               publisher
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

            <Query query={GET_BOOK_DETAILS}>
               {({ data, loading }) => {
                  if (loading) return '';
                  return (
                     <div className="detail__page">
                        <DetailHead detail={data.search_isbn[0].volume_info} product={this.props.location.state.product}/>
                        <DetailDescription detail={data.search_isbn[0].volume_info} />
                        <DetailMetaContent detail={data.search_isbn[0].volume_info} />
                     </div>
                  )
               }}
            </Query>

         </Layout>
      )
   }
};

export default DetailPage;