const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bG ;

function preload() {
    // create getBackgroundImg( ) here
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    if (backgroundImg)
    background(backgroundImg);
   


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson = await response.json();   
   // console.log(responseJson);

    // write code slice the datetime
    var datetime = responseJson.datetime;

   var hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    
   if (hour >= 04 && hour<= 06){
    bG = "sunrise1.png" ;

 }  else if (hour >= 06 && hour <= 08){
     bG = "sunrise2.png";

 } else if (hour>= 08 && hour <= 10) {
     bG = "sunrise3.png";

 } else if (hour >= 10 && hour <= 12) {
     bG = "sunrise4.png";

 } else if(hour >= 12 && hour <= 14) {
     bG= "sunrise5.png" ;

 } else if(hour >= 15 && hour <= 16) {
     bG = "sunrise6.png" ;

 } else if(hour >= 17 && hour <= 19){
     bG = "sunset7.png";

 } else if(hour>= 19 && hour <= 21) {
     bG = "sunset8.png" ;

 } else if(hour>= 21 && hour <= 23) {
     bG = "sunset9.png" ;

 } else if(hour>= 23 && hour === 0) {
     bG = "sunset10.png";

 } else if(hour === 0 && hour<= 03) {
     bG= "sunset11.png";

 } else {
     bG = "sunset12.png";
 }

 


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bG);

}
