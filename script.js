document.getElementById("dateSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("dateInput").value;
  console.log(value);
  const url = "https://www.whenisthenextmcufilm.com/api?date=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<h2>" + json.title + " releases in " + json.days_until + " days.</h2>";
      results += "\n<div class = moviePoster>";
        results += '<img src=' + json.poster_url + '>';
        results += "</div>\n";
      results += "<h2><div class = releaseDate>Release Date: </div></h2>" + '<div class = wText>' + json.release_date + '</div>';
      results += "<h2><div class = descrip>Description: </div></h2>" + '<div class = wText>' + json.overview + '</div>';
      results += '\n';

      //results += "" + "";
      document.getElementById("dateResults").innerHTML = results;
    });

});
