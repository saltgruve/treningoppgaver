var aktiviteter = [{
    navn: "Aerobics",
    kcalPerTime: 814
  },
  {
    navn: "Bordtennis",
    kcalPerTime: 236
  },
  {
    navn: "Fotball",
    kcalPerTime: 510
  },
  {
    navn: "Golf",
    kcalPerTime: 244
  },
  {
    navn: "Jogging",
    kcalPerTime: 666
  }
];
var intensitet = [{
    nivå: "lav",
    faktor: 0.8
  },
  {
    nivå: "middels",
    faktor: 1
  },
  {
    nivå: "høy",
    faktor: 1.2
  }
];
var sel = document.getElementById('aktivitetSelect');
var varighet = document.getElementById('varighetInput');
var knapp = document.getElementById('beregnKnapp');
var output = document.getElementById('outputTag');
var valgtAktivitet, valgtKcalPerTime, valgtIntensitet, valgtIntensitetsFaktor, valgtVarighet, kaloriForbruk, timer;
var radioKnapper = document.getElementsByClassName('radioboys');
for (var i = 0; i < radioKnapper.length; i++) {
  radioKnapper[i].addEventListener('click', radioFunksjon);
  console.log(radioKnapper[i])
}
knapp.addEventListener('click', beregnFunksjon);
sel.addEventListener('change', aktivitetFunksjon);

function radioFunksjon(event) {
  var targetValue = event.target.value;
  valgtIntensitet = intensitet[targetValue].nivå;
  valgtIntensitetsFaktor = intensitet[targetValue].faktor;
  console.log("radios", intensitet[targetValue]);
}

function aktivitetFunksjon(event) {
  var targetValue = event.target.value
  valgtAktivitet = aktiviteter[targetValue].navn;
  valgtKcalPerTime = aktiviteter[targetValue].kcalPerTime;
  console.log("aktivtets", aktiviteter[targetValue].navn)
}

function beregnFunksjon() {
  valgtVarighet = Number(varighet.value);
  timer = (valgtVarighet / 60);
  kaloriForbruk = ((valgtKcalPerTime * timer) * valgtIntensitetsFaktor).toFixed(2);
  output.innerHTML = "Du har valgt aktiviteten " + valgtAktivitet + ",<br>med " + valgtIntensitet +
    " intensitet og vil trene i " + valgtVarighet + " minutter.<br>Ditt kaloriforbruk vil dermed bli: " +
    kaloriForbruk + " kalorier!";
  console.log(kaloriForbruk)
}
