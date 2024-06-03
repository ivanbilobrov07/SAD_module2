package org.example;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {
    private ArticleRepository articleRepository;

    public ArticleController() {
        this.articleRepository = ArticleRepository.getInstance();
    }

    @GetMapping("")
    @CrossOrigin()
    public List<Article> getArticles() {
        return articleRepository.getArticles();
    }

    @GetMapping("/{articleId}")
    @CrossOrigin()
    public Article showArticle(@PathVariable("articleId") String articleId) {
        return articleRepository.getArticleById(articleId);
    }


    @PostMapping("")
    @CrossOrigin()
    public Article addArticle(@RequestBody Article article) {
        System.out.println(1);
        System.out.println(article.getTitle());
        return articleRepository.createArticle(new Article(article.getTitle(), article.getContent(), article.getCreatedAt()));
    }
}
