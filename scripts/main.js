var i = 0;
var images = [];
var Cardimages = [];
var time = 10000;

//images

images[0] = `linear-gradient(
	to bottom,
	rgba(32, 24, 173, 0.5) ,
	rgba(0, 212, 255, 0.5)
),
url(/img/city1.jpg)`;
images[1] = `linear-gradient(
	to bottom,
	rgba(32, 24, 173, 0.5),
	rgba(0, 212, 255, 0.5)
),url(/img/city2.jpg)`;
images[2] = `linear-gradient(
	to bottom,
	rgba(32, 24, 173, 0.5),
	rgba(0, 212, 255, 0.5)
),url(/img/city3.jpg)`;
images[3] = `linear-gradient(
	to bottom,
	rgba(32, 24, 173, 0.5) ,
	rgba(0, 212, 255, 0.5)
),url(/img/city4.jpg)`;
images[4] = `linear-gradient(
	to bottom,
	rgba(32, 24, 173, 0.5) ,
	rgba(0, 212, 255, 0.5)
),url(/img/city5.jpg)`;

//function

function changeImage() {
	var el = document.getElementById("header");
	el.style.backgroundImage = images[i];
	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImage()", time);
}

window.onload = changeImage;
