var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
   
// Image List
images[0] = "img/boy.jpg";
images[1] = "img/boy2.jpg";
images[2] = "img/girl.jpg";
images[3] = "img/jn.jpg";
images[4] = "img/art.jpg";
images[5] = "img/17.jpg";
images[6] = "img/19.jpg";
images[7] = "img/cardigan.jpg";
images[8] = "img/cabinet.jpg";


function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
 
    i++; 
  } else { 

    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload=changeImg;


