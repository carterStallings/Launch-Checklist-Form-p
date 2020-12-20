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
      
      if (validate === true) {
         faulty.style.visibility = "visible";
         friendList.innerHTML = `<img src = "./images/IMG_2584.jpg" alt = "Keith" width = '250' height = '250' class="center">`;
         status.innerHTML = "Chief Keef";
         status.style.color = "red";
         event.preventDefault();
      }
   });
}); 
