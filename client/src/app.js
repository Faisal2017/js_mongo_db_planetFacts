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
}

window.addEventListener('load', app);

// var pictureButton = document.querySelector('#pictureButton');
// pictureButton.addEventListener('click', redirect);