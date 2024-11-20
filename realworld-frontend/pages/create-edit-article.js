import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateEditArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tagList = tags.split(",").map(tag => tag.trim());

    const articleData = {
      article: {
        title,
        description,
        body,
        tagList
      }
    };

    try {
      const response = await fetch('http://localhost:3000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(articleData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        router.push('/'); // ホーム画面にリダイレクト
      } else {
        console.error('Failed to create article');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              className="form-control"
              placeholder="Article Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="What's this article about?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <textarea
              className="form-control"
              rows="8"
              placeholder="Write your article (in markdown)"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
            <input
              type="text"
              className="form-control"
              placeholder="Enter tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Publish Article
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}