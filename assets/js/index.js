var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square"); 
var rgbDisplay = document.getElementById("rgbDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var footer =document.querySelector("footer");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode listeners
		setupModeButtons();
		setupSquares();
		reset();
}

// mode buttons setup
function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
			// listeners for buttons
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// on easy mode are 3 squares, else there are 6 (hard mode)
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 

			reset();
		});
		}
}

function setupSquares(){
	// square listeners
		for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function () {
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			footer.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
		});
		}
}

function reset(){
	// genetate new colors
	colors = generateRandomColors(numSquares);
	// pick new random set of colors
	pickedColor = pickColor();
	// change rgbDisplay to match picked color - text
	rgbDisplay.textContent = pickedColor;

	// reset buttons for new colors
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
		
	}
	// display picked color on background of elements
	h1.style.backgroundColor = "#999";
	footer.style.backgroundColor = "#999";
}

// reset button
resetButton.addEventListener("click", function(){
	reset();
});

// match color on squares logic
function changeColors(color){
	//loop throuh all squares
	for (var i = 0; i < squares.length; i++) {
	//change each color to match give color
		squares[i].style.backgroundColor = color;
	}
}

 // randomize colors from list
function pickColor(){
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random];
}

// generates the random colors
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0 ; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
		
	}

	// return that array
	return arr;
}

// random color setup
function randomColor(){
	//pick color from 0-255...
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}