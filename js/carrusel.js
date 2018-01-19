// CARRUSEL
var randonMovieArray = ['Peloteros', 'Pantaleón y las visitadoras', 'Piratas en el Callao', 'Asu Mare'];
function apicall() {
  var divSection = $('#divSection');
  for (var i = 0; i < randonMovieArray.length; i++) {
    var randonMovie = randonMovieArray[i];

    $(document).on('click', function(event) {
      if ($(event.target).hasClass('modalEvent')) {
        var movieID = $(event.target).attr('id');
        $.getJSON('https://www.omdbapi.com/?i=' + movieID + '&apikey=91013cb1').then(function(response) {
          console.log(response.Title);
        });
        console.log($(event.target).attr('id'));
      }
    });

    $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randonMovie) + '&apikey=91013cb1').then(function(response) {
      var image = response.Poster;
      var title = response.Title;
      var year = response.Year;
      var director = response.Director;
      var language = response.Language;
      var genre = response.Genre;
      var actors = response.Actors;
      var plot = response.Plot;
      var id = response.imdbID;
      /* modal button*/
      var aModal = $('<a class="modalEvent" data-toggle="modal" data-target="#myModal"></a>');
      divSection.append(aModal);
      console.log(aModal);

      var divMovie = $('<div class="div-movie display-in ml-2 mr-2"></div>');
      aModal.append(divMovie);

      var divImage = $('<div class="div-image"></div>');
      divMovie.append(divImage);
      var poster = $('<img src="image" class="poster img-he ">');
      divImage.append(poster);
      poster.attr('src', image);

      var divContentMovie = $('<div class="div-text div-content-movie"></div>');
      divMovie.append(divContentMovie);

      var titleMovie = $('<div class="div-text title-movie"></div>');
      divContentMovie.append(titleMovie);
      titleMovie.append(title);
      aModal.click(function() {
        $('.modal-body').append('Title: ' + title);
        $('.modal-body').append('; year: ' + year);
        $('.modal-body').append('; sinopsis: ' + plot);
      });
    });// ---- $.getJASON
  } // for
} // --- apicall()
apicall();
