canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

birthday_cake_images_array=["download.jpg","happy-birthday-song-fact.jpg","R.jpg"];
random_number=Math.floor(Math.random()*4);
background_image=birthday_cake_images_array[random_number];
function add(){
    background_imgTag = new Image();//defining a variable with a new image 
background_imgTag.onload = uploadBackground;//setting a function, onloading this variable 
background_imgTag.src = background_image;// load image 

}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}