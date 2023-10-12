async function fetchData() {
  try {
    const response = await (await fetch("../fake_data.json")).json();
    showData(response);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

function showData(data) {
  const dataContainer = document.getElementsByClassName("content")[0];
  data.forEach((part) => {
    //создаю главную дивку карточку
    const article = document.createElement("article");
    article.classList.add("content__block");
    //его дети
    const issue = document.createElement("section");
    const cover = document.createElement("section");
    const articles = document.createElement("section");
    issue.classList.add("content__block-issue");
    cover.classList.add("content__block-cover");
    articles.classList.add("content__block-articles");
    //заливаю инфу в детей
    issue.innerHTML = `${part.issue}`;
    cover.innerHTML = `<img class="content__block-image" src="${part.cover.image}"></img> <h2 class="content__block-name">${part.cover.caption}</h2>`;
    part.articles.forEach((art) => {
      const artCard = document.createElement("div");
      artCard.classList.add("content__block-card");
      artCard.innerHTML = `<h3 class="content__block-title">${art.title}</h3> <h4 class="content__block-author">Author: ${art.author}</h4> <p class="content__block-content">${art.content}</p>`;
      articles.appendChild(artCard);
    });
    article.appendChild(issue);
    article.appendChild(cover);
    article.appendChild(articles);

    dataContainer.appendChild(article);
  });
}

fetchData();
