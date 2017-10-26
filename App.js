import React from 'react';
import ApolloClient, { HttpLink } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

import ArticleList from './ArticleList';

const link = new HttpLink({
  uri: 'https://api.graphcms.com/simple/v1/cj98b2tds1fha0115h7csyj5d',
});
const client = new ApolloClient({ link });

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Simple blog</h1>
      <ArticleList />
    </div>
  </ApolloProvider>
);

export default App;
