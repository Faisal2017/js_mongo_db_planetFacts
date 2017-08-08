var QuoteView = function(facts){
  this.render(facts);
}

QuoteView.prototype = {
  render: function(facts){
    
    console.log(facts);
    facts.forEach( function(fact){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('facts');
      text.innerText = fact.planet + ": " + '"' + fact.fact + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = QuoteView;