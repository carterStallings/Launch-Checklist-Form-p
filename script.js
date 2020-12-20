window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let submit = document.getElementById("formSubmit");

   form.addEventListener("submit", function(event) {
      let friendNameInput = document.querySelector("input[name=friendName]");
      let friendList = document.getElementById("friendStatus");
      let faulty = document.getElementById("faultyItems");
      let status = document.getElementById("launchStatus");
      let validate = "";
      if (friendNameInput.value === "") {
         alert("This field is required!");
         // stop the form submission
         event.preventDefault();
      } else {
         Number(friendNameInput.value);
         let numberTest1 = (isNaN(friendNameInput.value))
         if (numberTest1 === false) {
            alert("Friend Name must be String!");
            // stop the form submission
            event.preventDefault();
         }
         if (numberTest1 === true) {
            validate = true
         }
      }
      
      if (validate === true && friendNameInput.value === "Keith") {
         faulty.style.visibility = "visible";
         friendList.innerHTML = `<img src = "./images/IMG_2584.jpg" alt = "Keith" width = '250' height = '250' class="center"> <ol><li>Strength: Politics/Theology</li><li>Weakness: Flatulence</li><li>Favorite Quote: "Allllright guys"</li></ol>`;
         status.innerHTML = "Chief Keef";
         status.style.color = "red";
         event.preventDefault();
      } else if (validate === true && friendNameInput.value === "Luke") {
         faulty.style.visibility = "visible";
         friendList.innerHTML = `<img src = "./images/IMG_2585.jpg" alt = "Luke" width = '250' height = '250' class="center"> <ol><li>Strength: Guitar/Joy</li><li>Weakness: Snakes</li><li>Favorite Quote: "No No No turn those lights back on!"</li></ol>`;
         status.innerHTML = "Lukie Dukie";
         status.style.color = "red";
         event.preventDefault();
      } else if (validate === true && friendNameInput.value === "James") {
         faulty.style.visibility = "visible";
         friendList.innerHTML = `<img src = "./images/IMG_123.jpg" alt = "James" width = '250' height = '250' class="center"> <ol><li>Strength: Mergers & Acquisitions/Inspiration</li><li>Weakness: Braums</li><li>Favorite Quote: "Oh my gosh"</li></ol>`;
         status.innerHTML = "Jamesy";
         status.style.color = "red";
         event.preventDefault();
      } else {
         faulty.style.visibility = "visible";
         status.innerHTML = "Not a brother";
         status.style.color = "red";
         event.preventDefault();
      }
   });
}); 
