var armstrekkerId = document.getElementById('armstrekker');
var bredRyggmuskelId = document.getElementById('brede_ryggmuskel');
var audioId = document.getElementById('audioMuskler');
var output = document.getElementById('muskelNavn');
var lyder = [{
    lyd: "armstrekkeren_fixed.mp3",
    navn: "Armstrekkeren"
  },
  {
    lyd: "brede_ryggmuskel.mp3",
    navn: "Den brede <br> ryggmuskelen"
  }
]
armstrekkerId.addEventListener('click', muskel);
bredRyggmuskelId.addEventListener('click', muskel);

function muskel(event) {
  audioId.src = lyder[event.target.alt].lyd;
  audioId.play();
  output.innerHTML = lyder[event.target.alt].navn;
}
