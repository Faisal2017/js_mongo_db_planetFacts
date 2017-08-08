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
    window.location.href = "https://twistedsifter.files.wordpress.com/2014/03/nasa-heralds-cosmos-tv-show-reboot-with-amazing-series-of-space-images-2.jpg";
  });
}

window.addEventListener('load', app);

