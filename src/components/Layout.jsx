import React from 'react';
import Header from './Header/Header';
import '../css/main.scss';

const Layout = ({ children }) => (
   <div>
      <Header />
      { children }
   </div>
);

export default Layout