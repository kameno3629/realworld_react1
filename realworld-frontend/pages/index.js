import Layout from '../components/Layout';
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error:', error));

    fetch('http://localhost:3000/api/tags')
      .then(response => response.json())
      .then(data => setTags(data.tags))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Layout>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link" href="">Your Feed</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">Global Feed</a>
                  </li>
                </ul>
              </div>
              {articles.map(article => (
                <div key={article.slug} className="article-preview">
                  <div className="article-meta">
                    <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                      <i className="ion-heart"></i> {article.favoritesCount || 0}
                    </button>
                  </div>
                  <a href={`/article/${article.slug}`} className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      {article.tagList.map(tag => (
                        <li key={tag} className="tag-default tag-pill tag-outline">{tag}</li>
                      ))}
                    </ul>
                  </a>
                </div>
              ))}
              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">2</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list">
                  {tags.map(tag => (
                    <a key={tag} href="" className="tag-pill tag-default">{tag}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}