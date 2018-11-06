import React, { Fragment } from 'react';
import Header from './Header/Header';
import '../css/main.scss';

const Layout = ({ children, history }) => (
   <Fragment>
      <Header history={history} />
      { children }
   </Fragment>
);

export default Layout