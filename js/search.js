$(document).ready(function() {
  $('#searchForm').on('submit', function(event) {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    event.preventDefault();
  });    
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=3a181f1c').then(function(response) {
    console.log(response);
    var movies = response.data.Search;
    var output = '';
    $.each(movies, function(index, movie) {
      output += `
      <div class="card-deck col-md-3 offset-md-3">
        <div class="card">
          <img class="card-img-top" src="${movie.Poster}" alt="Card image cap" onclick="movieSelected('${movie.imdbID}')">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      `;
    });

    $('#movies').html(output);
  }).catch(function(error) {
    console.log(error);
  });
}

function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie() {
  var movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?i=' + movieId + '&apikey=3a181f1c').then(function(response) {
    console.log(response);    
    var movie = response.data;
    var output = `
      <div class="row">
        <div class="col-md-4">
          <img src="${movie.Poster}" alt="" class="thumbnall">
        </div>
        <div class="col-md-8">
          <h2>${movie.Title}</h2>
          <ul class="List-group">
            <li class="List-group-item"><strong>Año</strong> ${movie.Year}</li>
            <li class="List-group-item"><strong>Género</strong> ${movie.Genre}</li>
            <li class="List-group-item"><strong>País</strong> ${movie.Country}</li>
            <li class="List-group-item"><strong>Director</strong> ${movie.Director}</li>
            <li class="List-group-item"><strong>Reparto</strong> ${movie.Actors}</li>
          </ul>    
        </div>
      </div>
      <div class="row">
        <div class="well">
          <h3>Sinopsis</h3>
          ${movie.Plot}
          <hr>
          <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
          <a href="index.html" class="btn btn-default"> Go back to search</a>
        </div>
      </div>
    `;
    $('#movie').html(output);
  }).catch(function(error) {
    console.log(error);
  });
}