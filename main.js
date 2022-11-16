const form = document.querySelector(".form");

const getData = async (searchData) => {
  searchData != undefined
    ? (API_URL = "http://localhost:3000/peliculas?q=" + searchData)
    : (API_URL = "http://localhost:3000/peliculas");
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {}
};
const createCards = async (search) => {
  const cardField = document.querySelector("#content");
  cardField.innerHTML = "";
  const data = await getData(search);
  data.forEach((eachFilm) => {
    const { imagen, puntaje, nombre, categoria } = eachFilm;
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
      <img class="card-img" src="${imagen}">
      <h3>${nombre}</h2>
      <p>${puntaje} / 5</p>
      <p>${categoria}</p>
      `;
    cardField.appendChild(card);
  });
};
createCards();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = e.target.search.value;
  createCards(search);
  console.log(search);
});
