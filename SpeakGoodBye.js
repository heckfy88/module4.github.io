(function(window) {
  let speakWord = "Good Bye";
  let byeSpeaker = {};
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);