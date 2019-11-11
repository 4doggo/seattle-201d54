'use strict'; 

function Animal(name, barksPerWeek, weight) {
  this.name = name;
  this.barksPerWeek = barksPerWeek;
  this.weight = weight;

  this.render = function(domReference) {
    // Vinicio - what is domReference? - A an anchor to the dom, that I can use to render things

    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.append(tdName);

    for(var barkIndex = 0; barkIndex < this.barksPerWeek.length; barkIndex++) {
      var td = document.createElement('td');

      td.textContent = this.barksPerWeek[barkIndex];
      tr.append(td);
    }

    td = document.createElement('td');

    td.textContent = 'total';
    tr.append(td);

    domReference.append(tr);

    // Please don't add code here for the hourly totals
  }
}
// --------------------------------------------------------------------------------
// PRE-MADE ANIMALS
// --------------------------------------------------------------------------------
var kali = new Animal('Kali', [10,12,23, 5], '60 lbs');
var khal = new Animal('Khal', [0,100,0, 5], '7 lbs');
var ginger = new Animal('Ginger', [1,1,2, 5], '25 lbs');
var gregor = new Animal('Gregor', [12 , 1, 2, 5], '10 lbs');
// --------------------------------------------------------------------------------
var animals = [kali, khal, ginger, gregor];
// --------------------------------------------------------------------------------


function calculateAndRenderTotals(animals, domReference) {
  /*
  <tr>
    <td>
  </tr>
  */
  var tr = document.createElement('tr');

  var firstTD = document.createElement('td');
  firstTD.textContent = "Daily Totals";
  tr.append(firstTD);

  for(var barkIndex = 0; barkIndex < animals[0].barksPerWeek.length; barkIndex++) {
    var total = 0;
    for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
      total += animals[animalIndex].barksPerWeek[barkIndex];
    }
    console.log(`total ${total}`);
    var td = document.createElement('td');
    td.textContent = total;
    tr.append(td);

  }
  // Vinicio - if I need to render to the DOM, I need a reference to the DOM
  domReference.append(tr);
}



function renderDaysOfTheWeek(domReference) {
  // <tr> - :)
  //   <th> Header 1</th> :)
  //   <th> Header 2</th> :)
  //   <th> Header 3</th> :)
  // </tr> :)
  var daysOfTheWeek = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Total ;)'];

  var tr = document.createElement('tr');

  for(var day = 0; day < daysOfTheWeek.length; day++) {
    var th = document.createElement('th');

    th.textContent = daysOfTheWeek[day];

    tr.append(th);
  }
  domReference.append(tr);
}

// Vinicio - I'm making this function because I want to be able to call it over and over
function cleanScreenAndRenderAll(){
  // Connect to the table

  var tableReference = document.getElementById('dog-table');
  // Vinicio - I want to make sure I start from a clean slate
  tableReference.innerHTML = "";

  // DAYS
  renderDaysOfTheWeek(tableReference);

  // You absolutely need this loop
  for(var animalIndex = 0; animalIndex < animals.length; animalIndex++) {
    var currentAnimal = animals[animalIndex];

    currentAnimal.render(tableReference);
  } 

  // Make sure to re-calculate all the totals
  // Meaning - make sure to re-call your functons
  calculateAndRenderTotals(animals, tableReference);
}

//-------------------------------------------------------------------------------
// FORMS
//-------------------------------------------------------------------------------

var form = document.getElementById('animal-form');

// I want chrome to let me know when the user submits my form
form.addEventListener('submit', function(event) {
  // Vinicio - explore the event object on your own
  event.preventDefault(); // Vincio - don't reload
  
  // I want the value the user typed in the form

  // alert(event.target.name.value);
  // alert(event.target.weight.value);
  
  // I want to add a new animal into my array now

  var newAnimal = new Animal(event.target.name.value, [1,1,1,1], 
    event.target.weight.value);

  animals.push(newAnimal);

  cleanScreenAndRenderAll();
});

cleanScreenAndRenderAll();


var paragraph = document.getElementById('click-me');

paragraph.addEventListener('click', function(event) {
  var table = document.getElementById('dog-table');
  table.innerHTML = '';
});