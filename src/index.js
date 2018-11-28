import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import IndexPage from './components/Index/IndexPage';
import DetailPage from './components/Detail/DetailPage';
import SearchPage from './components/Search/SearchPage';
import SearchContainer from './components/Index/SearchContainer';
import NoRoute from './components/NoRoute';
import Layout from './components/Layout';

import './components/Icons';
import './css/css-reset.scss';

const cache = new InMemoryCache();

const client = new ApolloClient({
   uri: 'http://localhost:4000/graphql',
   cache
});

const App = () => (
   <Router>
      <ApolloProvider client={client}>
         <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/book/:title" component={DetailPage} />
            <Route path="/search/:title" component={SearchPage} />
            <Route exact path="/search" render={() => (
               <Layout>
                  <SearchContainer />
               </Layout>
            )} />
            <Route component={NoRoute} />
         </Switch>
      </ApolloProvider>
   </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));