'use sctrict'

let btn = document.querySelector("button") ;

btn.addEventListener("click", getCircle )

function getCircle(e){
  e.preventDefault();
// the for-loop set the number of times the functions
// will be played.
for( i = 0 ; i < 1 ; i++ ){

  let size = getWidth() ;
  let color1 = getColor() ;
  let color2 = getColor() ;
  let color3 = getColor() ;

 let myDiv = document.createElement("div") ;
 
 myDiv.style.height= size+"px";
 myDiv.style.width=  size+"px" ;
 myDiv.style.borderRadius= "400px";
 myDiv.style.position= "absolute";
 myDiv.style.position= "absolute";
 myDiv.style.top= getTop() ;
 myDiv.style.left= getLeft() ;
 myDiv.style.backgroundImage= `linear-gradient(${getOrientation()},rgb(${color1},${color2},${color3}),rgb(${getColor()},${getColor()},${getColor()}))` ;
 document.body.appendChild( myDiv )

      }
}

  
function getWidth(){
 return Math.floor( Math.random() * (200 - 40) +40 );
}

function getColor(){
  return Math.floor( Math.random() * (255 - 0) + 0 );
}

function getTop(){
  return Math.floor( Math.random() * (100 - 0) + 0 )+"vh" ;
}

function getLeft(){
  return Math.floor( Math.random() * (100 - 0) + 0 )+"vw" ;
}

function getOrientation(){
  return Math.floor( Math.random() * (360 - 0) + 0 )+"deg" ;
}


