import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ArticleItem = ({ article }) => (
  <li style={{ borderTop: '1px solid gray', width: 600 }}>
    <h3>{article.title}</h3>
    {article.cover &&
      <div
        style={{
          background: `url(${article.cover.url})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          width: 600,
          height: 150,
        }}
      />
    }
    <div style={{ textAlign: 'right', color: 'lightgray' }}>
      {new Date(article.date).toDateString()}
    </div>
    <p>{article.content}</p>
  </li>
);

const ArticleList = ({ data: { loading, error, allArticles } }) => (
  loading ? <p>Loading...</p> :
  error ? <p>Error: {error.message}</p> : (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
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
