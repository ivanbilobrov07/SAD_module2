import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./pages/articles/articles-page";
import ArticlePage from "./pages/article/article-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticlesPage />}></Route>
        <Route path="/:id" element={<ArticlePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
