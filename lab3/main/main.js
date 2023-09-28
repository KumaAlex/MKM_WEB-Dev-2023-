async function fetchData() {
    try {
        const response = await ((await fetch('../fake_data.json')).json());
        const data = response.characters
        showData(data);
    } catch (e) {
        console.error(e);
    }
}

function showData(data) {
    const dataContainer = document.getElementsByClassName("content")[0];
    data.forEach(char => {
        //создаю главную дивку карточку
        const card = document.createElement("a");
        card.classList.add("content__card");
        card.href = `http://127.0.0.1:5500/Web%20programming/lab3/character/character.html?id=${char.id}`

        //создаю саб-див инфо героя
        const heroInfo = document.createElement("div");
        heroInfo.classList.add("content__info");

        //создаю элементы и запихиваю их в консты
        const heroName = document.createElement("div");
        const heroAge = document.createElement("div");
        const heroGender = document.createElement("div");
        const heroHouse = document.createElement("div");
        heroName.innerHTML = `<div class="content__info-name"><strong>Name:</strong> ${char.name}</div>`;
        heroAge.innerHTML = `<div class="content__info-age"><strong>Age:</strong> ${char.age}</div>`;
        heroGender.innerHTML = `<div class="content__info-gender"><strong>Gender:</strong> ${char.gender}</div>`;
        heroHouse.innerHTML = `<div class="content__info-house"><strong>House:</strong> ${char.house}</div>`;

        const heroImg = document.createElement("div");
        heroImg.innerHTML = `<img class="content__img" src="${char.photo_url}"/>`;

        //добавляю консты в саб-див
        heroInfo.appendChild(heroName);
        heroInfo.appendChild(heroAge);
        heroInfo.appendChild(heroGender);
        heroInfo.appendChild(heroHouse);

        //добавляю саб-дивы в карточку
        card.appendChild(heroImg);
        card.appendChild(heroInfo);

        dataContainer.appendChild(card);
    });
}

fetchData();