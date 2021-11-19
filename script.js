(function(){
  var names = ["Y", "Jon", "J", "J", "P", "F", "L", "P", "L", "J"];
for ( var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if ( firstLetter == 'jon') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();

