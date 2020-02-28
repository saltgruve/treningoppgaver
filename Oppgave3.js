var muskelgruppe = [{
    navn: "Armer",
    øvelser: ["Bicepscurl med stang", "Fransk press"]
  },
  {
    navn: "Skuldre",
    øvelser: ["Stående militærpress", "Sidehev"]
  },
  {
    navn: "Ben",
    øvelser: ["Knebøy", "Leg extensions", "Leg curl"]
  },
  {
    navn: "Rygg",
    øvelser: ["Nedtrekk", "Roing"]
  },
  {
    navn: "Bryst",
    øvelser: ["Benkpress", "Flies", "Push up"]
  }
];
var sett = [];
var muskelgruppeSel = document.getElementById('gruppeSelect');
var outputØvelser = document.getElementById('muligeØvelserOutput');
var outputØvelseOgGruppe = document.getElementById('output2');
var knapp = document.getElementById('settButton');
var outputSett = document.getElementById('output3');
var tableVar = document.getElementById('tableId');
var treningsvolumOutput = document.getElementById('output4');
knapp.addEventListener('click', addSett);
muskelgruppeSel.addEventListener('change', øvelserFunksjon);
var radioKnapper, targetValue, valgtØvelse;
var settIndex = 1;


fyllSelect();

function fyllSelect() {
  var fyllNedtrekk = "<option disabled selected>Velg muskelgruppe: </option>";
  for (var i = 0; i < muskelgruppe.length; i++) {
    fyllNedtrekk += "<option value='" + i + "'>" + muskelgruppe[i].navn + "</option>";

  }
  console.log(muskelgruppeSel)
  muskelgruppeSel.innerHTML = fyllNedtrekk;
}

function øvelserFunksjon(event) {
  targetValue = event.target.value;
  var muligeØvelserArray = muskelgruppe[targetValue].øvelser;
  var radioButtons = "";
  for (var i = 0; i < muligeØvelserArray.length; i++) {
    radioButtons += "<label>" + muligeØvelserArray[i] +
      "</label><input type='radio' name='radios' class='radioboys' value='" + i + "' id='øvelse" + i + "'/><br>";
  }
  outputØvelser.innerHTML = radioButtons;
  radioKnapper = document.getElementsByClassName('radioboys');
  for (var i = 0; i < radioKnapper.length; i++) {
    radioKnapper[i].addEventListener('click', valgAvØvelseFunksjon);
  }
  console.log(radioButtons);
}

function valgAvØvelseFunksjon(event) {
  var i = event.target.value;
  valgtØvelse = muskelgruppe[targetValue].øvelser[i];
  outputØvelseOgGruppe.innerHTML = "Du har valgt muskelgruppen <b>" + muskelgruppe[targetValue].navn +
    "</b> og øvelsen <b>" + valgtØvelse + ".</b>";
}

function addSett() {
  console.log(outputSett)
  var settLager = "";
  settLager = "Sett nummer " + settIndex +
    ": <label>Repetisjoner</label><input type='number' class='scalarRep' alt='" + (settIndex - 1) + "' min='0' value='0'/>" +
    "<label>Motstand</label><input type='number' class='scalarMot' alt='" + (settIndex - 1) + "' min='0' value='0'/><br>";
  outputSett.innerHTML += settLager;
  sett[settIndex - 1] = {
    repitisjoner: 0,
    motstand: 0
  };
  var inputsRep = document.getElementsByClassName('scalarRep');
  for (var i = 0; i < inputsRep.length; i++) {
    inputsRep[i].addEventListener('change', updateChangeRep);
  }
  var inputsMot = document.getElementsByClassName('scalarMot');
  for (var i = 0; i < inputsMot.length; i++) {
    inputsMot[i].addEventListener('change', updateChangeMot);
  }
  settIndex++;
  console.log(sett)
  updateTable()
}

function updateChangeRep(event) {
  console.log(outputSett)
  var currentIndex = event.target.alt;
  var currentValgtValue = event.target.value;
  sett[currentIndex].repitisjoner = currentValgtValue;
  console.log(sett);
  updateTable();

}

function updateChangeMot(event) {

  var currentIndex = event.target.alt;
  var currentValgtValue = event.target.value;
  sett[currentIndex].motstand = currentValgtValue;
  event.target.value = event.target.value;
  console.log(event.target);
  updateTable();

}

function updateTable() {
  var nyTable = "<tr><th>Sett</th><th>Repitisjoner</th><th>Motstand</th></tr>";
  for (var i = 0; i < sett.length; i++) {
    nyTable += "<tr><td>" + (i + 1) + ". sett</td><td>" + sett[i].repitisjoner + "</td><td>" + sett[i].motstand + "</td>";
    tableVar.innerHTML = nyTable;
  }
  var treningsvolum = 0;
  for (var i = 0; i < sett.length; i++) {
    treningsvolum += Number(sett[i].repitisjoner) * Number(sett[i].motstand);
  }
  treningsvolumOutput.innerHTML = "Treningsvolum: " + treningsvolum + " kg";
}
