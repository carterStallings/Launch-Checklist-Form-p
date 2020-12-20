window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let submit = document.getElementById("formSubmit");

   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotList = document.getElementById("pilotStatus");
      let copilotList = document.getElementById("copilotStatus");
      let fuelList = document.getElementById("fuelStatus");
      let cargoList = document.getElementById("cargoStatus");
      let faulty = document.getElementById("faultyItems");
      let status = document.getElementById("launchStatus");
      let validate = "";
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      } else {
         Number(pilotNameInput.value);
         let numberTest1 = (isNaN(pilotNameInput.value))
         if (numberTest1 === false) {
            alert("Pilot Name must be String!");
            // stop the form submission
            event.preventDefault();
         }
         Number(coPilotNameInput.value);
         let numberTest2 = (isNaN(coPilotNameInput.value))
         if (numberTest2 === false) {
            alert("Co-pilot Name must be String!");
            // stop the form submission
            event.preventDefault();
         }
         Number(fuelLevelInput.value);
         let numberTest3 = (isNaN(fuelLevelInput.value))
         if (numberTest3 === true) {
            alert("Fuel Level (L) must be Number!");
            // stop the form submission
            event.preventDefault();
         }
         Number(cargoMassInput.value);
         let numberTest4 = (isNaN(cargoMassInput.value))
         if (numberTest4 === true) {
            alert("Cargo Mass (kg) must be Number!");
            // stop the form submission
            event.preventDefault();
         }
         if (numberTest1 === true && numberTest2 === true && numberTest3 === false && numberTest4 === false) {
            validate = true
         }
         if (validate === true && fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            faulty.style.visibility = "visible";
            pilotList.innerHTML = `${pilotNameInput.value} is ready for launch.`;
            copilotList.innerHTML = `${coPilotNameInput.value} is ready for launch.`;
            fuelList.innerHTML = "Fuel Level too low for launch.";
            cargoList.innerHTML = "Cargo Mass too large for launch";
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            event.preventDefault();
         }
         if (validate === true && cargoMassInput.value > 10000 && fuelLevelInput.value > 10000) {
            faulty.style.visibility = "visible";
            pilotList.innerHTML = `${pilotNameInput.value} is ready for launch.`;
            copilotList.innerHTML = `${coPilotNameInput.value} is ready for launch.`;
            cargoList.innerHTML = "Cargo Mass too large for launch";
            fuelList.innerHTML = "Fuel Level high enough for launch.";
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            event.preventDefault();
         }
         if (validate === true && cargoMassInput.value < 10000 && fuelLevelInput.value < 10000) {
            faulty.style.visibility = "visible";
            pilotList.innerHTML = `${pilotNameInput.value} is ready for launch.`;
            copilotList.innerHTML = `${coPilotNameInput.value} is ready for launch.`;
            cargoList.innerHTML = "Cargo mass low enough for launch.";
            fuelList.innerHTML = "Fuel Level too low for launch.";
            status.innerHTML = "Shuttle not ready for launch";
            status.style.color = "red";
            event.preventDefault();
         }
         if (validate === true && cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
            faulty.style.visibility = "visible";
            pilotList.innerHTML = `${pilotNameInput.value} is ready for launch.`;
            copilotList.innerHTML = `${coPilotNameInput.value} is ready for launch.`;
            cargoList.innerHTML = "Cargo mass low enough for launch.";
            fuelList.innerHTML = "Fuel Level high enough for launch.";
            status.innerHTML = "Shuttle is ready for launch";
            status.style.color = "green";
            event.preventDefault();
         }
      }
   });
    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  div.innerHTML =`
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[3].name}</li>
                     <li>Diameter: ${json[3].diameter}</li>
                     <li>Star: ${json[3].star}</li>
                     <li>Distance from Earth: ${json[3].distance}</li>
                     <li>Number of Moons: ${json[3].moons}</li>
                  </ol>
                  <img src="${json[3].image}"> 
                  `
               });
   });
});

/* /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/ 
