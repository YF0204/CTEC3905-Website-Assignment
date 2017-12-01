	// variable for images
	var myIndex = 0;
	gallery();
	
	// this function is the first slideshow in the about me page
	function gallery() {
	// var for index
	var i;
	// get the images in the mySlides div
	var x = document.getElementsByClassName("mySlides");
	// execute a for loop
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
		}
	// increment the index
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";
	// change image every three seconds
	setTimeout(gallery, 3000);
	}
	
	// variable for images
	var myIndex = 0;
	carousel1();
	
	// this function is the second slideshow in the about me page
	function carousel1() {
	// var for index
	var i;
	// get the images in the Slides div
	var x = document.getElementsByClassName("Slides");
	// execute a for loop
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
		}
	// increment the index
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";  
	// change image every three seconds
	setTimeout(carousel1, 3000);
	}