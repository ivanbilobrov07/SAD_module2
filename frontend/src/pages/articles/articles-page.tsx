import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../../types/article";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const { data } = await axios.get(`http://localhost:8080/articles`);

      setArticles(() => data);
      setIsLoading(false);
    };

    getArticles();
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = e.currentTarget.querySelector("#title") as HTMLInputElement;
    const content = e.currentTarget.querySelector(
      "#content"
    ) as HTMLInputElement;

    const { data } = await axios.post("http://localhost:8080/articles", {
      title: title.value,
      content: content.value,
      createdAt: new Date().toISOString(),
    });

    setArticles((articles) => [...articles, data]);

    title.value = "";
    content.value = "";
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input id="title" type="text" />
        <br />
        <textarea id="content"></textarea>
        <button>Add article</button>
      </form>

      <ul style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {articles?.map(({ title, createdAt, id }) => (
          <Link to={id} key={id}>
            <li style={{ border: "1px solid black", padding: "20px" }}>
              <h2>{title}</h2>
              <p>{createdAt}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
