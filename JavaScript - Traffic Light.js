// File Name: Traffic Light
// Purpose: Emulates a Traffic Light
// Date: 2020-03-01
// Last modified: 2020-03-01
// Author: Josen Pottackal
// Copy right no copyright
// Version: 1.0

var canvas = document.getElementById("traffic_light"); //Creates canvas
var context = canvas.getContext("2d"); 
var light_red = ["red", "red", "white", "white"];
var light_amber = ["white", "orange", "white", "orange"];
var light_green = ["white", "white", "green", "white"]; 
var colour = 0; 

context.rect(0, 0, 250, 460); //Draws a black rectangle with the stated dimensions
context.fillStyle = "black";
context.fill();

function draw_light() { //Creates a function that draws three circles which change colour 
    "use strict"; 
    context.beginPath();
    context.arc(125, 90, 60, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = light_red[colour];
    context.fill();

    context.beginPath();
    context.arc(125, 230, 60, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = light_amber[colour];
    context.fill();

    context.beginPath();
    context.arc(125, 370, 60, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = light_green[colour];
    context.fill();
}
draw_light();

function sequence() { //This line of code creates a function called “sequence” 
    "use strict"; 
	colour = (colour + 1) % 4;
    draw_light();
}
setInterval(sequence, 900);//This runs the function “switched_on” with an interval of 900 milliseconds 