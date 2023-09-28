async function fetchData() {
  try {
    const response = await (await fetch("../fake_data.json")).json();
    const data = response.list;
    showData(data);
  } catch (e) {
    console.error(e);
  }
}

function showData(data) {
  const dataContainer = document.getElementById("content");
  data.forEach((place) => {
    //создаю главную дивку карточку
    const card = document.createElement("div");
    card.classList.add("content__card");

    //создаю саб-див инфо местечка для отдыха :)
    const tripInfo = document.createElement("div");
    tripInfo.classList.add("content__info");

    //создаю элементы и запихиваю их в консты
    const tripName = document.createElement("div");
    const tripRating = document.createElement("div");
    const tripDescr = document.createElement("div");
    tripName.innerHTML = `<div class="content__info-name">${place.name}</div>`;
    tripRating.innerHTML = `<div class="content__info-Rating">Rating: ${place.rating} / 5</div>`;
    tripDescr.innerHTML = `<div class="content__info-descr">${place.description}</div>`;

    const tripImg = document.createElement("div");
    tripImg.innerHTML = `<img class="content__img" src="${place.image_url}"/>`;

    //добавляю консты в саб-див
    tripInfo.appendChild(tripName);
    tripInfo.appendChild(tripRating);
    tripInfo.appendChild(tripDescr);

    //добавляю саб-дивы в карточку
    card.appendChild(tripImg);
    card.appendChild(tripInfo);

    dataContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});