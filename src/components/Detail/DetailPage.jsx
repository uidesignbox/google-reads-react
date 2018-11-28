import React, { Component, Fragment } from 'react';
import Layout from '../Layout';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import DetailHead from './DetailHead';
import DetailBody from './DetailBody';
import DetailDescription from './DetailDescription';
import DetailMetaContent from './DetailMetaContent';
import Placeholder from '../Search/Placeholder';
import ErrorMessage from '../Search/ErrorMessage';

const GET_BOOK_BY_ISBN = gql`
   query BookISBNQuery($number: String!) {
      search_isbn(isbn: $number) {
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

class DetailPage extends Component {
   render() {
      const propData = this.props.location.state;
      const number = this.props.location.state.detail.isbns && this.props.location.state.detail.isbns[0].isbn10;

      return (
         <Layout history={this.props.history}>
            <div className="detail__page">

            {/* If not from search then run query. */}
            {!this.props.location.state.isFromSearch ? 
               <Query query={GET_BOOK_BY_ISBN} variables={{number}}>
                  {({ data, loading, error }) => {
                     if (loading) return <Placeholder />;
                     if (error) return <ErrorMessage message={`Sorry no book found with the isbn: ${number || ''}`} />;
                     const { description, subtitle, published_date, publisher, language, images, title, authors, categories, page_count } = data.search_isbn[0].volume_info;
                     return (
                        <Fragment>
                           <DetailHead
                              images={images}
                              title={title}
                              authors={authors}
                              categories={categories}
                              pages={page_count}
                              product={this.props.location.state.productUrl}
                           />
                           <DetailBody>
                              <DetailDescription description={description} />
                              <DetailMetaContent
                                 title={title}
                                 subtitle={subtitle}
                                 publisher={publisher}
                                 date={published_date}
                                 language={language}
                                 product={this.props.location.state.productUrl}
                                 />
                           </DetailBody>
                        </Fragment>
                        )
                     }}
               </Query> : 
                  <Fragment>
                     <DetailHead
                        images={propData.detail.images}
                        title={propData.detail.title}
                        authors={propData.detail.authors}
                        categories={propData.detail.categories}
                        pages={propData.detail.page_count}
                     />
                     <DetailBody>
                        <DetailDescription description={propData.detail.description} />
                        <DetailMetaContent
                           title={propData.detail.title}
                           subtitle={propData.detail.subtitle}
                           publisher={propData.detail.publisher}
                           date={propData.detail.published_date}
                           language={propData.detail.language}
                        />
                     </DetailBody>
                  </Fragment>
               }
            </div>
         </Layout>
      )
   }
};

export default DetailPage;