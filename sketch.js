const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;

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
    if(backgroundImg){
        getBackgroundImg();
        }

    Engine.update(engine);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch('http://worldtimeapi.org/api/timezone/America/Toronto');
    //change the data in JSON format
    var responceJSON = await time.json();
    // write code slice the datetime
    var dt = responceJSON.datetime;
    var hour = dt.slice(11,13);

    textSize(30);
    text(30,30,'time: '+dt);

    // add conditions to change the background images from sunrise to sunset
    if(hour >=04 && hour <=06){
        bg = 'sunrise1.png'
       }else if(hour >=06 && hour <=08){
        bg = 'sunrise2.png'
        console.log(2);
       }else if(hour >=08 && hour <=10){
        bg = 'sunrise3.png'
        console.log(3);
       }else if(hour >=10 && hour <=12){
        bg = 'sunrise4.png'
        console.log(4);
       }else if(hour >=12 && hour <=14){
        bg = 'sunrise5.png'
        console.log(5);
       }else if(hour >=14 && hour <=16){
        bg = 'sunrise6.png'
        console.log(6);
       }else if(hour >=16 && hour <=18){
        bg = 'sunset7.png'
        console.log(7);
       }else if(hour >=18 && hour <=20){
        bg = 'sunset8.png'
        console.log(8);
       }else if(hour >=20 && hour <=22){
        bg = 'sunset9.png'
        console.log(9);
       }else if(hour >=22 && hour <=24){
        bg = 'sunset10.png'
        console.log(10);
       }else if(hour >=24 && hour <=26){
        bg = 'sunset11.png'
        console.log(11);
       }else{
        bg = 'sunset12.png'
        console.log(12);
       }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
