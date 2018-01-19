$(document).ready(function() {
  $('#searchForm').on('submit', function(event) {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    event.preventDefault();
  });    
});

var output = '';

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=3a181f1c').then(function(response) {
    var movies = response.data.Search;

    $.each(movies, function(index, movie) {
      axios.get('http://www.omdbapi.com/?i=' + `${movie.imdbID}` + '&apikey=3a181f1c').then(function(response) {
        // console.log(response.data.Country);
        var country = response.data.Country;  
        var countries = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru'];
        
        for (var i = 0; i < countries.length; i++) {
          if (country === countries[i]) {

            output += `
            <div class="card-size mb-5 col-6 col-sm-4 col-md-3 col-lg-2">
              <div class="card">
                <img class="card-img-top" src="${movie.Poster}" alt="Imagen No Disponible" onclick="movieSelected('${movie.imdbID}')">
                <div class="card-body">
                  <h6 class="card-title">${movie.Title}</h6>
                  <p class="card-text">${movie.Year}</p>
                </div>
              </div>
            </div>
            `;
            $('#movies').html(output);  
          }          
        }        
      });
    });    
    var output = '';
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
        <div class="col-sm-4">
          <img src="${movie.Poster}" alt="" class="img-thumbnail img-fluid">
        </div>
        <div class="col-sm-8">
          <h2>${movie.Title}</h2>
          <ul class="mt-3 mb-4 List-group">
            <li class="List-group-item"><strong>Año:</strong> ${movie.Year}</li>
            <li class="List-group-item"><strong>Género:</strong> ${movie.Genre}</li>
            <li class="List-group-item"><strong>País:</strong> ${movie.Country}</li>
            <li class="List-group-item"><strong>Director:</strong> ${movie.Director}</li>
            <li class="List-group-item"><strong>Reparto:</strong> ${movie.Actors}</li>
          </ul>
          <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-info">Ver IMDB</a>
          <a href="#" class="btn btn-outline-info">Ver más tarde</a>
          <a href="#trailer" class="btn btn-outline-info">Trailer</a>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-12">
          <h3>Sinopsis</h3>
          ${movie.Plot}
        </div>
      </div>
    `;
    $('#movie').html(output);
  }).catch(function(error) {
    console.log(error);
  });
}