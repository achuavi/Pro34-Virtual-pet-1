//Create variables here
var dog,Hdog,foods,foodstock,database;
var dimage,dhimage;

function preload()
{
	//load images here
  dimage=loadImage('images/dogImg.png');
  dhimage=loadImage('images/dogImg1.png');
  
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,250,50,50);
  dog.addImage(dimage);
  dog.scale=0.5;
  database=firebase.database();
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writestock(foods);
    dog.addImage(dhimage);
  }
 // dog.addImage(dimage);
  drawSprites();
  //add styles here
  stroke("red");
  fill("red");
  textSize(20);
  text("Press UP_ARROW to feed the Drago Milk",100,30);
  text("Milk Bottle:"+foods,200,450)
}
function readStock(data){
foods=data.val();

}
function writestock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})

}



