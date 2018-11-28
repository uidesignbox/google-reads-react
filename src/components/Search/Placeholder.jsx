import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlaceholderItem from './PlaceholderItem';

class Placeholder extends PureComponent {
   render() {
      let count = this.props.count || 3;
      let items = [];
      for (let i = 0; i < count; i++) {
         items.push(<PlaceholderItem key={i} />)
      };
      return (
         <section className={`placeholder__wrapper ${this.props.style || ''}`}>
            { items }
         </section>
      )
   }
};

Placeholder.propTypes = {
   style: PropTypes.string,
   count: PropTypes.number,
};

export default Placeholder;