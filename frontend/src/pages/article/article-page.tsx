import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Article } from "../../types/article";
import axios from "axios";

const ArticlePage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const getArticle = async () => {
      const { data } = await axios.get(`http://localhost:8080/articles/${id}`);

      setArticle(() => data);
      setIsLoading(false);
    };

    getArticle();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/">Back</Link> <br />
      <h2>{article!.title}</h2>
      <p>{article!.content}</p>
      <p>{article!.createdAt}</p>
    </>
  );
};

export default ArticlePage;
