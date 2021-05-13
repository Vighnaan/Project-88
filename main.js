var canvas = new fabric.Canvas(my_canvas);
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
       player_object=Img;
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({
           top:player_y,
           left:player_x
       });
       canvas.add(player_object);
    })
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
       block_image_object=Img;
       block_image_object.scaleToWidth(150);
       block_image_object.scaleToHeight(140);
       block_image_object.set({
           top:player_y,
           left:player_x
       });
       canvas.add(block_image_object);
    })
}
window.addEventListener("keydown,my_keydown")
function my_keydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
    if(e.shiftkey == true && keyPressed==80){
        console.log("p and shift are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftkey == true && keyPressed==77){
        console.log("m and shift are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=38){
        up();
        console.log(up);
    }
    if(keyPressed=40){
        down();
        console.log(down);
    }
    if(keyPressed=37){
        left();
        console.log(left);
    }
    if(keyPressed=39){
        right();
        console.log(right);
    }
    if(keyPressed=70){
        new_image(thor_face.png);
        console.log(face);
    }
    if(keyPressed=66){
        new_image(spiderman_body.png);
        console.log(body);
    }
        if(keyPressed=72){
        new_image(captain_america_left_hand.png);
        console.log(left_hand);
    }
        if(keyPressed=82){
            new_image(hulk_right_hand.png);
            console.log(face);
        }
        if(keyPressed=76){
            new_image(ironman_legs.png);
            console.log(legs);
        }
        if(keyPressed=70){
            new_image(thor_face.png);
            console.log(face);
        }
    }
function up(){
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("whe Up arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update;
    }
}
function down(){
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("whe Down arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update;
    }
}
function left(){
    if(player_x>=0)
    {
        player_x=player_x-block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("whe Left arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update;
    }
}
function right(){
    if(player_x<=850)
    {
        player_x=player_x-block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("whe Right arrow key is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update;
    }
}