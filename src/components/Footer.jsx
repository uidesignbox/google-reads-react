import React, { PureComponent } from 'react';
import Logo from '../utils/uidb_profile.png';

class Footer extends PureComponent {
   render() {
      return (
         <footer className="main__footer">
            <h3 className="title">Credits</h3>
            <ul className="footer__credit-links">
               <li>
                  <a href="https://https://developer.nytimes.com/books_api.json" target="_blank" title="Visit New York Times API documentation.">Credit to NYT Books API</a>
               </li>
               <li>
                  <a href="https://https://developers.google.com/books/docs/v1/using" target="_blank" title="Visit Google Books API documentation.">Google Books API</a>
               </li>
               <li>
                  <a href="https://apollographql.com" target="_blank" title="Visit Apollo Client's homepage.">Made With Apollo Client & GraphQL</a>
               </li>
            </ul>
            <aside className="footer__credit-section">
               <small>
                  Developed by 
                  <a href="https://github.com/uidesignbox" target="_blank" title="Visit UiDesignBox's Github."> UiDesignBox</a>
               </small>
               <a href="https://github.com/uidesignbox" target="_blank" title="Visit UiDesignBox's Github." className="footer__logo">
               { Logo &&
                  <img src={Logo} alt="Brand logo" /> }
               </a>
            </aside>
         </footer>
      );
   }
};

export default Footer;