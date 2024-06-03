package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ArticleRepository {
    private static ArticleRepository instance;
    public List<Article> articles;

    public static ArticleRepository getInstance(){
        if(instance == null){
            instance = new ArticleRepository();
        }

        return instance;
    }

    private ArticleRepository() {
        articles = new ArrayList<>();
        articles.add(new Article("Test", "Test", "2024-04-12"));
    }

    public List<Article> getArticles() {
        return articles;
    }

    public Article getArticleById(String articleId) {
        for (Article article : articles) {
            if (Objects.equals(article.getId(), articleId)) {
                return article;
            }
        }

        return null;
    }

    public Article createArticle(Article article) {
        articles.add(article);
        return article;
    }
}
