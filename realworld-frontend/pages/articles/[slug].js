import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (slug) {
      console.log('Slug:', slug);
      fetch(`http://localhost:3000/api/articles/${slug}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Full response data:', data);
          setArticle(data);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [slug]);

  if (!article) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Author <span className="counter">(10)</span>
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post <span className="counter">(29)</span>
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <i className="ion-trash-a"></i> Delete Article
              </button>
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <p>{article.body}</p>
              <ul className="tag-list">
                {article.tagList && article.tagList.map(tag => (
                  <li key={tag} className="tag-default tag-pill tag-outline">{tag}</li>
                ))}
              </ul>
            </div>
          </div>

          <hr />

          <div className="article-actions">
            <div className="article-meta">
              <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Author
              </button>
              &nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Article <span className="counter">(29)</span>
              </button>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <i className="ion-trash-a"></i> Delete Article
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <form className="card comment-form">
                <div className="card-block">
                  <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div className="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="Author" />
                  <button className="btn btn-sm btn-primary">Post Comment</button>
                </div>
              </form>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/profile/author" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="Author" />
                  </a>
                  &nbsp;
                  <a href="/profile/jacob-schmidt" className="comment-author">Jacob Schmidt</a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/profile/author" className="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="Author" />
                  </a>
                  &nbsp;
                  <a href="/profile/jacob-schmidt" className="comment-author">Jacob Schmidt</a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    <i className="ion-trash-a"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
