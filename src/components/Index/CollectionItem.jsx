import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CollectionItem extends PureComponent {
   render() {
      const data = this.props;
      return (
         <article className="collection__item">
            <Link to={{
               pathname: `/book/${data.title.toLowerCase()}`,
               state: { 
                  detail: {
                     isbns: data.isbns,
                     productUrl: data.product,
                  }
               }
            }}>
               <img src={data.images.small} alt={`Book cover of ${data.title}`}/>
            </Link>
         </article>
      );
   }
}

CollectionItem.propTypes = {
   images: PropTypes.object,
   title: PropTypes.string,
   isbns: PropTypes.array
};


export default CollectionItem;