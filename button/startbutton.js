var playButton = document.getElementById("play-button");
var newImage = null;

// Füge einen "mouseover"-Event-Listener hinzu
playButton.addEventListener("mouseover", function() {
  // Erstelle ein neues Bild-Element mit der URL des neuen Bildes
  newImage = document.createElement("img");
  newImage.id = "button-on-mouse"; // Setze die ID des neuen Bildes auf "button-on-mouse"
  newImage.src = "https://i.imgur.com/pBMPu9R.png"; // URL des neuen Bildes hier einfügen

  // Füge das neue Bild vor dem alten Bild in das Dokument ein
  playButton.parentNode.insertBefore(newImage, playButton);

  // Setze die Größe und Position des neuen Bildes
  newImage.style.width = "50px"; // Hier die Breite des Bildes einstellen
  newImage.style.height = "50px"; // Hier die Höhe des Bildes einstellen
  newImage.style.position = "absolute";
  newImage.style.left = playButton.offsetLeft - newImage.width + "px";
  newImage.style.top = playButton.offsetTop + "px";
});

// Füge einen "mouseout"-Event-Listener hinzu
playButton.addEventListener("mouseout", function() {
  // Verstecke das neue Bild, wenn die Maus das alte Bild verlässt
  if (newImage !== null) {
    newImage.style.display = "none";
  }
});
