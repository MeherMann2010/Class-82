var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;

var canvas= document.getElementById("myCanvas")
var ctx=canvas.getContext("2d");


canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e){
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e){
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
  
    
    var current_position_of_x = e.clientX - canvas.offsetLeft
    var current_position_of_y = e.clientY - canvas.offsetTop

     
if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;



    ctx.moveTo(last_position_of_x, last_position_of_y);


    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;

}