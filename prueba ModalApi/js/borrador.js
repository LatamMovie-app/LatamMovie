var randonMovieArray = ['Star Wars','Harry Potter', 'Game of Thrones', 'Asu mare', 'Batman', 'Peloteros', 'Asu Mare','Piratas en el Callao', 'Piratas en el Callao'];

$('button').click(function() {
 apicall();
});



function apicall(){

for (var i = 0; i < randonMovieArray.length; i++) {

  var randonMovie =   randonMovieArray[i];
  console.log(randonMovie);
}//---- for


  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randonMovie) + '&apikey=91013cb1').then(function(response){
    /*console.log(response.Poster);*/

    var image = response.Poster;
    console.log(image);
/**/
    if (image !== "N/A"){
      $('img').attr('src', image);
    }
/**/

});// ---- $.getJASON
} // --- apicall()

/*

function getData() {
   var dataValue = data.value;
   <!--nuevo div-->
   var newDiv = document.createElement('div');
   <!--data y estilo en nuevo div-->
   createTweet.appendChild(newDiv);
   newDiv.textContent = time() + ' |  ' +dataValue;
   newDiv.classList.add('new-style');
   <!--limpiar data-->
   data.value = "";
}

*/
