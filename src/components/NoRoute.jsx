import React, { PureComponent } from 'react';
import Layout from './Layout';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NoRoute extends PureComponent {
   render() {
      return (
         <Layout history={this.props.history}>
            <section className="not-found__page">
               <h1 className="title">Sorry, no page found!</h1>
               {/* <FontAwesomeIcon icon="pause-circle" className="icon" /> */}
               <h2 className="subtitle">This was unexpected, try running a search by clicking on the icon on the header.</h2>

               {this.props.history &&
                  <button className="not-found__btn" onClick={this.props.history.goBack}>Go Back to Previous Page?</button>
               }
            </section>
         </Layout>
      );
   }
};

export default NoRoute;