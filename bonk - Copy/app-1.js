function bonk() {
   if (document.getElementById("jp").src="hap.png") 
   {
       document.getElementById("jp").src="bonk.png";
       setTimeout(returnBack, 100);
   }
}

function returnBack() {
   document.getElementById("jp").src="hap.png";
}

var count = 0;
function myFunction() {
   if (count==10){
      alert('woah hold on there your bonking kinda hard,,,');
   }
   if (count==30){
      alert('you better stop bOnking!');
   }
   if (count==40){
      alert('uhhh they are kinda dead,,,, um');
   }
   if (count==60){
      alert('i- their head ,,,,, ');
   }
   if (count==100){
      alert('you boNked 100 times !! ');
   }
   count++;
}

function count() {
   document.getElementById("times").src="count"
}


var clicks = 0;

function initiateClicks() {
    var clickStr = localStorage.getItem("counter-display");
    if(clickStr == undefined){
        localStorage.setItem("counter-display", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);   
    }
    document.getElementById("counter-display").innerHTML = clicks;
}

function doClick() {
    clicks += 1;
    localStorage.setItem("counter-display", clicks);
    document.getElementById("counter-display").innerHTML = clicks;
}

document.getElementById("jp").onclick = doClick;
initiateClicks();
