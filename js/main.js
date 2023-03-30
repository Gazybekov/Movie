let movie1 = document.querySelector(".info");
let movie = document.querySelector(".movie");

let api = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");
api
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    movie1.innerHTML = "";
    info.Search.forEach((elem) => {
      movie1.innerHTML += `
      <h1>Список фильмов</h1>
      <div class="movie">
      <img id="img" src="${elem.Poster}" alt="">
        <h4 id="h4">${elem.Title}</h4>
        <h5 id="h5"> Year ${elem.Year}</h5>
        <br />
      </div>
      `;
    });
  });
