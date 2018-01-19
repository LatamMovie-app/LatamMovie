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

// CARRUSEL-------------
function apicall() {
  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI('Asu Mare') + '&apikey=91013cb1').then(function(response) {
    /* console.log(response.Poster);*/
    var image = response.Poster;
    console.log(image);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors = response.Actors;
    var plot = response.Plot;
    console.log(image);
    var carou1 = $('#carou1');
    var divPoster = $('<img src="image" class="poster">');
    carou1.append(divPoster);
    divPoster.attr('src', image);
    $('.api1').append(title);
    $('.year1').append(year);
    $('.genre1').append(genre);
    $('.director1').append('Director: ' + director);
    $('.plot').append(plot);


    $('#carou1').click(function() {
      $('.image-poster1').attr('hidden', true);
      $('.tab1').attr('hidden', false);
    });
    $('.tab1').click(function() {
      $('.tab1').attr('hidden', true);
      $('.image-poster1').attr('hidden', false);
    });
  }); // $.getJASON

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI('Desierto') + '&apikey=91013cb1').then(function(response) {
    /* console.log(response.Poster);*/
    var image = response.Poster;
    console.log(image);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors = response.Actors;
    var plot = response.Plot;
    console.log(image);
    var carou2 = $('#carou2');
    var divPoster = $('<img src="image" class="poster">');
    carou2.append(divPoster);
    divPoster.attr('src', image);
    var api2 = $('.api2');
    api2.append(title);
    $('.year2').append(year);
    $('.genre2').append(genre);
    $('.director2').append('Director: ' + director);
    $('.plot').append(plot);
    $('#carou2').click(function() {
      $('.image-poster2').attr('hidden', true);
      $('.tab2').attr('hidden', false);
    });
    $('.tab2').click(function() {
      $('.tab2').attr('hidden', true);
      $('.image-poster2').attr('hidden', false);
    });
  }); // $.getJASON

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI('Amor') + '&apikey=91013cb1').then(function(response) {
    /* console.log(response.Poster);*/
    var image = response.Poster;
    console.log(image);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors = response.Actors;
    var plot = response.Plot;
    console.log(image);
    var carou3 = $('#carou3');
    var divPoster = $('<img src="image" class="poster">');
    carou3.append(divPoster);
    divPoster.attr('src', image);
    var api3 = $('.api3');
    api3.append(title);
    $('#carou3').click(function() {
      $('.image-poster3').attr('hidden', true);
      $('.tab3').attr('hidden', false);
    });
    $('.tab3').click(function() {
      $('.tab3').attr('hidden', true);
      $('.image-poster3').attr('hidden', false);
    });
  }); // $.getJASON

  // mas vistos-------------------------------------------------------------------------

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI('Peloteros') + '&apikey=91013cb1').then(function(response) {
    /* console.log(response.Poster);*/
    var image = response.Poster;
    console.log(image);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors = response.Actors;
    var plot = response.Plot;
    console.log(image);
    var carou4 = $('#carou4');
    var divPoster = $('<img src="image" class="poster">');
    carou4.append(divPoster);
    divPoster.attr('src', image);
    $('.api1').append(title);
    $('.year3').append(year);
    $('.genre3').append(genre);
    $('.director3').append('Director: ' + director);
    $('.plot').append(plot);
    var api4 = $('.api4');
    api4.append(title);
    $('#carou4').click(function() {
      $('.image-poster4').attr('hidden', true);
      $('.tab4').attr('hidden', false);
    });
    $('.tab4').click(function() {
      $('.tab4').attr('hidden', true);
      $('.image-poster4').attr('hidden', false);
    });
  }); // $.getJASON

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI('Pantaleón y las visitadoras') + '&apikey=91013cb1').then(function(response) {
    /* console.log(response.Poster);*/
    var image = response.Poster;
    console.log(image);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors = response.Actors;
    var plot = response.Plot;
    console.log(image);
    var carou5 = $('#carou5');
    var divPoster = $('<img src="image" class="poster">');
    carou5.append(divPoster);
    divPoster.attr('src', image);
    var api5 = $('.api5');
    api5.append(title);
    $('#carou5').click(function() {
      $('.image-poster5').attr('hidden', true);
      $('.tab5').attr('hidden', false);
    });
    $('.tab5').click(function() {
      $('.tab5').attr('hidden', true);
      $('.image-poster5').attr('hidden', false);
    });
  }); // $.getJASON

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI('Piratas en el Callao') + '&apikey=91013cb1').then(function(response) {
    /* console.log(response.Poster);*/
    var image = response.Poster;
    console.log(image);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors = response.Actors;
    var plot = response.Plot;
    console.log(image);
    var carou6 = $('#carou6');
    var divPoster = $('<img src="image" class="poster">');
    carou6.append(divPoster);
    divPoster.attr('src', image);
    var api6 = $('.api6');
    api6.append(title);
    $('#carou6').click(function() {
      $('.image-poster6').attr('hidden', true);
      $('.tab6').attr('hidden', false);
    });
    $('.tab6').click(function() {
      $('.tab6').attr('hidden', true);
      $('.image-poster6').attr('hidden', false);
    });
  }); // $.getJASON
} // --- apicall()
apicall();
