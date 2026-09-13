// Aquire info from json place holder.

function addCard(data) {
    // Clone template.
    const template =
      document.getElementById("card-template").content.cloneNode(true);
    // News title.
    template.querySelector('.card-title').innerText =
    data.title;
    // News content.
    template.querySelector('.card-text').innerText =
    data.body;
    // Add to HTML page.
    document.querySelector("#card-list").appendChild(template);
}

const jsonData = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then((response) => response.json())
//   .then((json) => console.log(json))
  .then((posts) => {
    posts.forEach(item => addCard(item))
  })
