'use strict';

function titleClickHandler(event){
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles .active');
      
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    event.preventDefault();
    const clickedElement = this;
    
    clickedElement.classList.add('active');
      console.log('clickedElement:', clickedElement);
      console.log('clickedElement (with plus): ' + clickedElement);
    /* [DONE]remove class 'active' from all articles */
    
    const activeArticles = document.querySelectorAll('.post');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */
    
    targetArticle.classList.add('active');

}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks(){
     /* remove contents of titleList */
     
    const titleList = document.querySelector(optTitleListSelector).innerHTML = '';
    
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
      console.log(articles);

    let html = '';

    for(let article of articles) {

      /* get the article id */

        const articleId = article.getAttribute('id');

      /* find the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log(articleTitle);

      /* get the title from the title element */
        
        const titleList = document.querySelector(optTitleListSelector);

      /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);
       
      /* insert link into titleList */

      titleList.innerHTML = titleList.innerHTML + linkHTML;
        

    }
    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks()