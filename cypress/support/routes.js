class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments'


    }    

    init(){
        // POST 200 /api/articles
        // GET 200 /api/articles/artigo-principal-marketing-producer-hvgg07
        // GET 200 /api/articles/artigo-principal-marketing-producer-hvgg07/comments
        cy.intercept('POST','**/api/articles').as(this.as.postArticles);
        cy.intercept('GET','**//api/articles/artigo-**').as(this.as.getArticlesTitle);
        cy.intercept('GET','**//api/articles/artigo-**/comments').as(this.as.getArticlesTitleComments);    
    }
}
export default new Routes();