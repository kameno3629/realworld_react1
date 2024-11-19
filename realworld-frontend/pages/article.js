import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:3000/api/articles/${slug}`)
        .then(response => response.json())
        .then(data => setArticle(data.article))
        .catch(error => console.error('Error:', error));
    }
  }, [slug]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span className="date">{new Date(article.createdAt).toLocaleDateString()}</span>
            {/* 他のボタンやメタ情報を追加 */}
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article.body}</p>
            <ul className="tag-list">
              {article.tagList.map(tag => (
                <li key={tag} className="tag-default tag-pill tag-outline">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}