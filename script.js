var image;
var greyImage;
var redImage;
var ct = 1;

function uploadImg() 
{
	var canvas = document.getElementById("cvas");
	var getImage = document.getElementById("fipt");
	image = new SimpleImage(getImage);
	greyImage = new SimpleImage(getImage);
	redImage = new SimpleImage(getImage);
	image.drawTo(canvas);
}

function makeGray() 
{
	for (var pixels of greyImage.values()) 
	{
		var red = pixels.getRed();
		var blue = pixels.getBlue();
		var green = pixels.getGreen();
		var avg = (red + blue + green) / 3;
		pixels.setBlue(avg);
		pixels.setRed(avg);
		pixels.setGreen(avg);
	}
	var canvas1 = document.getElementById("cvas");
	greyImage.drawTo(canvas1);
}

function makeRed()
{
	for (var pixels of redImage.values())
	{
		pixels.setRed(255);
	}
	var canvas1 = document.getElementById("cvas");
	redImage.drawTo(canvas1);
}

function Reset7() 
{
	var canvas1 = document.getElementById("cvas");
	image.drawTo(canvas1);
}

function makeFilter() 
{
	for (var pixels of greyImage.values()) 
	{
		var red = pixels.getRed();
		var blue = pixels.getBlue();
		var green = pixels.getGreen();
		var avg = (red + blue + green) / 3;
		if (avg < 128)
		{
			pixels.setRed(2 * avg);
			pixels.setGreen(0);
			pixels.setBlue(0);
		} 
		else 
		{
			pixels.setRed(255);
			pixels.setGreen((2 * avg) - 255);
			pixels.setBlue((2 * avg) - 255);
		}
	}
	var canvas1 = document.getElementById("cvas");
	greyImage.drawTo(canvas1);
}

function makeDisButton() 
{
	for (var pixels of greyImage.values()) 
	{
		var red = pixels.getRed();
		var blue = pixels.getBlue();
		var green = pixels.getGreen();
		var avg = (red + blue + green) / 3;
		if (avg < 128) 
		{
			pixels.setRed(avg-ct);

		}
		ct = ct + 3;
	}
	var canvas1 = document.getElementById("cvas");
	greyImage.drawTo(canvas1);
}