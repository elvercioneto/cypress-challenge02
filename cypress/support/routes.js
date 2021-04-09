class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postUsers: 'POSTUsers',
        getTags: 'GETTags',
        getFeed: 'GETFeed',
        postLogin: 'POSTLogin'
    }    

    init(){
        // POST 200 /api/articles
        // GET 200 /api/articles/artigo-principal-marketing-producer-hvgg07
        // GET 200 /api/articles/artigo-principal-marketing-producer-hvgg07/comments
        cy.intercept('POST','**/api/articles').as(this.as.postArticles);
        cy.intercept('GET','**/api/articles/artigo-**').as(this.as.getArticlesTitle);
        cy.intercept('GET','**/api/articles/artigo-**/comments').as(this.as.getArticlesTitleComments); 
        cy.intercept('POST','**/api/users').as(this.as.postUsers); 
        cy.intercept('GET','**/api/tags').as(this.as.getTags); 
        cy.intercept('GET','**/api/articles/feed**').as(this.as.getFeed); 
        cy.intercept('POST','**/api/users/login').as(this.as.postLogin); 

    }
}
export default new Routes();