import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ArticleItem = ({ article }) => (
  <li>
    {article.cover && <img src={article.cover.url} />}
    <h1>{article.title}</h1>
    <p>{article.content}</p>
  </li>
);

const ArticleList = ({ data: { loading, error, allArticles } }) => (
  loading ? <p>Loading...</p> :
  error ? <p>Error: {error}</p> : (
    <ul>
      {allArticles.map(article => <ArticleItem key={article.id} article={article} />)}
    </ul>
  )
);

const query = gql`
{
  allArticles(orderBy: date_ASC) {
    id
    title
    date
    content
    cover {
      url
    }
  }
}
`;

export default graphql(query)(ArticleList);
