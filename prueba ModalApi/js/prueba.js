$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
var randonMovieArray = ['Peloteros','Pantaleón y las visitadoras','Piratas en el Callao', 'Asu Mare'];
function apicall(){
  var divSection = $('#divSection');
  for (var i = 0; i < randonMovieArray.length; i++) {
    var randonMovie = randonMovieArray[i];
  /*  console.log(randonMovie);*/
    $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randonMovie) + '&apikey=91013cb1').then(function(response){
    /*console.log(response.Poster);*/
    var image = response.Poster;
    var title = response.Title;
    var year = response.Year;
    var director = response.Director;
    var language = response.Language;
    var genre = response.Genre;
    var actors= response.Actors;
    var plot = response.Plot;
/*    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>*/
/*modal button---------------------*/
    var aModal = $('<a class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal"></a>')
     divSection.append(aModal);
/*modal body--------------------*/
    var modalBody = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>')
    console.log(modalBody);
    var modalDialog = $('<div class="modal-dialog"></div>')
    modalBody.append(modalDialog);
    var modaltext = $('<div class="modal-body">...</div>')
    modalDialog .append(modaltext);
//------------------------------
    var divMovie = $('<div class="div-movie"></div>');// movie a ancle orange border:blue
      aModal.append(divMovie);
/*imagen---------------------*/
    var divImage = $('<div class="div-image"></div>');//div pink images
     divMovie.append(divImage);
    var poster = $('<img src="image" class="poster">');
       divImage.append(poster);
       poster.attr('src', image);
// contenido---------------------
    var divContentMovie = $('<div class="div-text div-content-movie"></div>');//div pink content
     divMovie.append(divContentMovie);
     //title---------------------
    var titleMovie = $('<div class="div-text title-movie"></div>');
    divContentMovie.append(titleMovie);
    titleMovie.append(title);
    $('.modal-body').append(title);
    console.log(title);

    /*año---------------------
    var yearMovie = $('<div class="div-text year-movie"></div>');
    divContentMovie.append(yearMovie);
    yearMovie.append(year);*/
  /*//Director---------------------
    var directorMovie = $('<div class="div-text director-movie"></div>');
    divContentMovie.append(directorMovie);
    directorMovie.append(director);
    //language---------------------
    var languageMovie = $('<div class="div-text language-movie"></div>');
    divContentMovie.append(languageMovie);
    languageMovie.append(language);
    //genero---------------------
    var genreMovie = $('<div class="div-text genre-movie"></div>');
    divContentMovie.append(genreMovie);
    genreMovie.append(genre);
    //actores---------------------
    var actorsMovie = $('<div class="div-text actors-movie"></div>');
    divContentMovie.append(actorsMovie);
    actorsMovie.append(actors);
    //sinopsis---------------------
    var plotMovie = $('<div class="div-text plot-movie"></div>');
    divContentMovie.append(plotMovie);
    plotMovie.append(plot);
    */
    });// ---- $.getJASON
  }//---- for
} // --- apicall()
 apicall();


/**/
