import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './components/Index/IndexPage';
import './components/Icons';

import './css/css-reset.scss';

const App = () => (
   <Router>
      <Switch>
         <Layout>
            <Route exact path="/" component={IndexPage} />
         </Layout>
      </Switch>
   </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));