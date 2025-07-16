const API_KEY = "YOUR_API_KEY"; // Replace this with your actual TMDB API key
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const moviesContainer = document.getElementById("movies");
const searchInput = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  moviesContainer.innerHTML = "";
  movies.forEach(movie => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-card");
    movieEl.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span>⭐ ${movie.vote_average}</span>
      </div>
    `;
    moviesContainer.appendChild(movieEl);
  });
}

searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value;
  if (query) {
    getMovies(SEARCH_API + query);
  } else {
    getMovies(API_URL);
  }
});

// Load popular movies on start
getMovies(API_URL);
