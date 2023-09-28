async function fetchData() {
  try {
    const response = await (await fetch("../fake_data.json")).json();
    const list = response.list;
    const travel_tips = response.travel_tips;
    showList(list);
    showTips(travel_tips);
  } catch (e) {
    console.error(e);
  }
}

function showList(list) {
  const listContainer = document.getElementsByClassName("aside__locations")[0];
  list.forEach((place) => {
    const tripName = document.createElement("li");
    tripName.innerHTML = `${place.name}`;
    tripName.classList.add("aside__location-name");

    listContainer.appendChild(tripName);
  });
}

function showTips(tips) {
  const tipContainer = document.getElementsByClassName("aside__tips")[0];
  tips.forEach((tip) => {
    const tipName = document.createElement("li");
    tipName.innerHTML = `${tip.tip}`;
    tipName.classList.add("aside__tip");

    tipContainer.appendChild(tipName);
  });
}

fetchData();
