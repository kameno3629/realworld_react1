import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function NewArticle() {
  const router = useRouter();
  const { slug } = router.query;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tagList, setTagList] = useState('');

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:3000/api/articles/${slug}`)
        .then(response => response.json())
        .then(data => {
          console.log('API response:', data);
          const article = data.article || data;
          setTitle(article.title);
          setDescription(article.description);
          setBody(article.body);
          if (article.tag_list) {
            setTagList(article.tag_list.join(', '));
          }
        })
        .catch(error => console.error('Error loading article:', error));
    }
  }, [slug]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const articleData = {
      article: {
        title,
        description,
        body,
        tagList: tagList.split(',').map(tag => tag.trim())
      }
    };

    try {
      const method = slug ? 'PUT' : 'POST';
      const url = slug ? `http://localhost:3000/api/articles/${slug}` : 'http://localhost:3000/api/articles';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(articleData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <ul className="error-messages">
                {/* エラーメッセージを表示する場合 */}
              </ul>

              <form onSubmit={handleSubmit}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      required
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      value={tagList}
                      onChange={(e) => setTagList(e.target.value)}
                    />
                    <div className="tag-list">
                      {/* タグを表示する場合 */}
                    </div>
                  </fieldset>
                  <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                    {slug ? 'Update Article' : 'Publish Article'}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
