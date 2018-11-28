import React, { Fragment } from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import '../css/main.scss';

const Layout = ({ children, history }) => (
   <Fragment>
      <Header history={history} />
      { children }
      <Footer />
   </Fragment>
);

export default Layout