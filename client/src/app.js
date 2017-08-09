var QuoteView = require('./views/quoteView');

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var factString = this.responseText;
  var facts = JSON.parse(factString);
  var ui = new QuoteView(facts);
}

var app = function() {
  var url = "http://localhost:3000/facts";
  makeRequest(url, requestComplete);

  var pictureButton = document.querySelector('#pictureButton');
  pictureButton.addEventListener('click', function() {
    document.location.href = "http://coolinterestingstuff.com/wp-content/uploads/2012/07/nasa_-_the_andromeda_galaxy_m31_spyral_galaxy.jpg";
  });
}

window.addEventListener('load', app);

