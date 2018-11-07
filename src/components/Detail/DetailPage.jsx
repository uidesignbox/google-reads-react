import React, { Component, Fragment } from 'react';
import Layout from '../Layout';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import DetailHead from './DetailHead';
import DetailDescription from './DetailDescription';
import DetailMetaContent from './DetailMetaContent';


class DetailPage extends Component {
   render() {
      const propData = this.props.location.state
      const query = propData.isbns ? propData.isbns.isbn10 : '';
      const GET_BOOK_BY_ISBN = gql`
      {
         search_isbn(isbn: "${query}") {
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
            <div className="detail__page">

            {/* If not from search then run query. */}
            {!this.props.location.state.isFromSearch ? 
               <Query query={GET_BOOK_BY_ISBN}>
                  {({ data, loading }) => {
                     if (loading) return '';
                     const detail = data.search_isbn[0].volume_info;
                     return (
                        <Fragment>
                           <DetailHead images={detail.images} title={detail.title} authors={detail.authors} categories={detail.categories} pages={detail.page_count} product={this.props.location.state.product}/>
                           <DetailDescription description={detail.description} />
                           <DetailMetaContent title={detail.title} subtitle={detail.subtitle} publisher={detail.publisher} date={detail.published_date} language={detail.language} product={this.props.location.state.product} />
                        </Fragment>
                        )
                     }}
               </Query> : 
                  <Fragment>
                     <DetailHead images={propData.detail.images} title={propData.detail.title} authors={propData.detail.authors} categories={propData.detail.categories} pages={propData.detail.page_count} />
                     <DetailDescription description={propData.detail.description} />
                     <DetailMetaContent title={propData.detail.title} subtitle={propData.detail.subtitle} publisher={propData.detail.publisher} date={propData.detail.published_date} language={propData.detail.language} />
                  </Fragment>
               }
            </div>
         </Layout>
      )
   }
};

export default DetailPage;