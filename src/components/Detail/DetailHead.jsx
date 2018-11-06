import React from 'react';
import PropTypes from 'prop-types';

const DetailHead = (props) => (
   <div className="detail__header">
      {/* <div>DetailHead.jsx</div> */}
      <div className="detail__head-img">
         <img src={`${props.detail.images.normal}`} alt={`Book cover of ${props.detail.title}`}/>
      </div>
      <header>
         <h2 className="detail__head-title">{props.detail.title}</h2>
         <h4 className="detail__head-author">{`by ${props.detail.authors}`}</h4>
         <span className="detail__head-cat">{props.detail.categories}</span>
      </header>
      <div className="detail__head-bottom">
         <a href={props.url} className="detail__head-btn" target="_blank">
            <button>Buy Now</button>
         </a>
         <span className="detail__head-pages">{props.detail.page_count}</span>
      </div>
   </div>
);

DetailHead.propTypes = {
   detail: PropTypes.object,
   url: PropTypes.string
}

export default DetailHead;