function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(100, 600);
  var height =  getRandomSize(100, 600);
  $('#photos').append('<img src="//www.lorempixel.com/'+width+'/'+height+'/nature" alt="images">');
}