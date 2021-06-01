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
    var dateTime = responseJson.currentDateTime;

   var hour = dateTime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    
   if (hour >= 06 && hour<= 19){
    bG = "sunrise1.png" ;
 }
 
 if(hour >= 07 && hour <= 19) {
     bG = "sunrise2.png";
 }

 if(hour >= 09 && hour <= 19) {
    bG = "sunrise3.png";
 }

   if(hour >= 11 && hour <= 19) {
   bG = "sunrise4.png";
   }
   
   if(hour >= 13 && hour <= 19) {
    bG = "sunrise5.png";
    }

    if(hour >= 14 && hour <= 19) {
        bG = "sunrise6.png";
        }

        if(hour >= 16 && hour <= 19) {
            bG = "sunset7.png";
            }

            
        if(hour >= 17 && hour <= 19) {
            bG = "sunset8.png";
            }

            
        if(hour >= 18 && hour <= 20) {
            bG = "sunset9.png";
            }

            
        if(hour >= 19 && hour <= 21) {
            bG = "sunset10.png";
            }

            
        if(hour >= 20 && hour <= 21) {
            bG = "sunset11.png";
            }

            
        if(hour >= 22 && hour <= 23) {
            bG = "sunset12.png";
            }
         
     
 




    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bG);

}
