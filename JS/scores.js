// displays review scores in p tag elements when user clicks button

document.getElementById("WW2Btn").addEventListener("click", function(){
    document.getElementById("WW2Score").innerHTML = "8/10 - Great!";
});

document.getElementById("HZDBtn").addEventListener("click", function(){
    document.getElementById("HZDScore").innerHTML = "9/10 - Awesome!";
});

document.getElementById("TekkenBtn").addEventListener("click", function(){
    document.getElementById("TekkenScore").innerHTML = "9/10 - Punchtastic!";
});