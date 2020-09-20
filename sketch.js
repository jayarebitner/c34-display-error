//Create variables here


var dog, happyDog, database, foodS, foodStock;


function preload()
{

 this.image = loadImage("images/dog.png");
 this.image = loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog = "images/dog.png";
  dogHappy = "image/happydog.png";

database = firebase.database();
  foodstock=database.ref('food')
  foodstock.on("value",readstock);
}


function draw() {  
background(46,139,87);


if (keyWentDown(UP_ARROW)){
writeStock(foodS);
textSize(31);
fill("green");
stroke("blue");
text("thank you homan you have provided me sustenance",200,200)
dog.addImage(dogHappy)
}




//dog.display();


  drawSprites();
  text("vlandemare the destroyer",225,200)
  textSize(31);
  fill("green");
  stroke("blue");


}

function readstock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
