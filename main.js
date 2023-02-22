canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

GreenCar_width = 75;
GreenCar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

Car_x = 5 ;
Car_y = 225 ;

function add() {

	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, Car_x, Car_y, GreenCar_width, GreenCar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (Car_y >= 0) {

		Car_y = Car_y -10;
		uploadBackground()
		uploadGreenCar()
	}
}

function down()
{
	if (Car_y >= 0) {

		Car_y = Car_y +10;
		uploadBackground()
		uploadGreenCar()
	}
}

function left()
{
	if (Car_x >= 0) {

		Car_x = Car_x -10;
		uploadBackground()
		uploadGreenCar()
	}
}

function right()
{
	if (Car_x >= 0) {

		Car_x = Car_x +10;
		uploadBackground()
		uploadGreenCar()
	}
}
