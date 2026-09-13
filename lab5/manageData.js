let news = [
{ id: 1, title: 'Election Results', 
content: "Newly elected minister..." },
{ id: 2, title: 'Sporting Success', 
content: "World Cup winners..." },
{ id: 3, title: 'Tornado Warning', 
content: "Residents should prepare..." },
];
//create cards based on news array.
function addCard(article) {
    // Clone template.
    const template =
      document.getElementById("card-template").content.cloneNode(true);
    // News title.
    template.querySelector('.card-title').innerText =
    article.title;
    // News content.
    template.querySelector('.card-content').innerText =
    article.content;
    // Add to HTML page.
    document.querySelector("#card-list").appendChild(template);
}
// function to iterate through list.
function getNews() {
    const refreshNews = document.querySelector("#card-list");
    //Clears cards from page.
    refreshNews.innerHTML = "";
    //Adds cards to page.
    news.forEach(article => addCard(article));
}
//Initialy call functions.
getNews()
//Call function repeatedly with delay.
setInterval(getNews, 5000);
//Get information from form.
const newsForm = document.getElementById("news-form");
const newsHeadline = document.getElementById("news-headline");
const newsArticle = document.getElementById("news-article");
//push form data to existing array.
newsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newNews = {
        id: news.length + 1,
        title: newsHeadline.value,
        content: newsArticle.value
    };
    news.push(newNews);
    newsForm.reset();
})