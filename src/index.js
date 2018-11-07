import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import IndexPage from './components/Index/IndexPage';
import DetailPage from './components/Detail/DetailPage';
import SearchPage from './components/Search/SearchPage';

import './components/Icons';
import './css/css-reset.scss';

const client = new ApolloClient({
   uri: 'http://localhost:4000/graphql'
})

const App = () => (
   <Router>
      <ApolloProvider client={client}>
         <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/book/:title" component={DetailPage} />
            <Route path="/search/:title" component={SearchPage} />
         </Switch>
      </ApolloProvider>
   </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));