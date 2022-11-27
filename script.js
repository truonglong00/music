var source = "https://github.com/truonglong00/music/raw/main/music/khongcanphaihuadauem.mp3"

 window.onload = function() {
  var audio = document.createElement("audio");
  //
  audio.autoplay = true;
  //
  audio.load()
  audio.addEventListener("load", function() { 
      audio.play(); 
  }, true);
  audio.src = source;
}