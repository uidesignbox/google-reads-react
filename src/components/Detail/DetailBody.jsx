import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DetailBody extends PureComponent {
   render() {
      return (
         <article className="detail__body">
            { this.props.children }
         </article>
      );
   }
}

DetailBody.propTypes = {
   children: PropTypes.any,
};

export default DetailBody;