import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Layout from './components/Layout';
import IndexPage from './components/Index/IndexPage';

import './components/Icons';
import './css/css-reset.scss';

const client = new ApolloClient({
   uri: 'http://localhost:4000/graphql'
})

const App = () => (
   <Router>
      <ApolloProvider client={client}>
         <Switch>
            <Layout>
               <Route exact path="/" component={IndexPage} />
            </Layout>
         </Switch>
      </ApolloProvider>
   </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));