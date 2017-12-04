(function(){

  // store items in variables
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;

  // display the text in the console log
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // if there's text in localstorage, display it with the following words - Your Profile
    userName.value = `Your Profile: ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // if there's nothing in localstorage
    userName.value = "Enter here";
    console.log(`No info stored`);
  }

  function Save() {
    if(userName.value === "") {
      alert("Please enter your details");
      userName.focus();
    }
    // get the text the user has entered
    nameStored = userName.value;
    
    // display the info in textbox
    userName.value = nameStored;
    
    // put the info into localStorage:
    localStorage.name = nameStored;
    
    // displays the info in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
	
	// alert user when data is saved
	alert("Your profile has been saved");
    
    return false;
  }

  function clearData() {
    console.log(`before clear: ${localStorage.name}`);

    // Clear all localStorage data:
    localStorage.clear();

    // delete localStorage.name;
    console.log(`after clear: ${localStorage.name}`);
	
	// alert user when data is cleared
	alert("Your profile has been deleted");
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = Save; // for Firefox
  }
  else {
    getName.addEventListener("submit", Save);
    event.preventDefault();
  }
  // Chrome/IE only
  getName.addEventListener("reset", clearData);

}());