(function() {
	
	// Get a regular interval for drawing to the screen
	window.requestAnimFrame = (function (callback) {
		return window.requestAnimationFrame || 
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimaitonFrame ||
					function (callback) {
					 	window.setTimeout(callback, 1000/60);
					};
	})();

	// Set up the canvas
	var canvas = document.getElementById("sig-canvas");
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = "#222222";
	ctx.lineWith = 2;

	// Set up the UI
	var sigText = document.getElementById("sig-dataUrl");
	var sigText1 = document.getElementById("sig-dataUrl1");
	var sigText2 = document.getElementById("sig-dataUrl2");
	var sigText3 = document.getElementById("sig-dataUrl3");

	var sigText4 = document.getElementById("sig-dataUrl4");
	var sigText5 = document.getElementById("sig-dataUrl5");
	var sigText6 = document.getElementById("sig-dataUrl6");
	var sigText7 = document.getElementById("sig-dataUrl7");
	var sigText8 = document.getElementById("sig-dataUrl8");
	var sigText9 = document.getElementById("sig-dataUrl9");
	var sigText10 = document.getElementById("sig-dataUrl10");

	var sigImage = document.getElementById("sig-image");
	var clearBtn = document.getElementById("sig-clearBtn");
	var submitBtn = document.getElementById("sig-submitBtn");
	clearBtn.addEventListener("click", function (e) {
		clearCanvas();
		sigText.innerHTML = "";
		sigText1.innerHTML = "";
		sigText2.innerHTML = "";
		sigText3.innerHTML = "";

		sigText4.innerHTML = "";
		sigText5.innerHTML = "";
		sigText6.innerHTML = "";
		sigText7.innerHTML = "";
		sigText8.innerHTML = "";
		sigText9.innerHTML = "";
		sigText10.innerHTML = "";

		sigImage.setAttribute("src", "");
	}, false);
	submitBtn.addEventListener("click", function (e) {
		var dataUrl = canvas.toDataURL();

		
		sigText.innerHTML = dataUrl;
		sigText1.innerHTML = dataUrl.substr(0, 4000);
		sigText2.innerHTML = dataUrl.substr(4000, 4000);
		sigText3.innerHTML = dataUrl.substr(8000, 4000);

		sigText4.innerHTML = dataUrl.substr(12000, 4000);
		sigText5.innerHTML = dataUrl.substr(16000, 4000);
		sigText6.innerHTML = dataUrl.substr(20000, 4000);

		sigText7.innerHTML = dataUrl.substr(24000, 4000);
		sigText8.innerHTML = dataUrl.substr(28000, 4000);
		sigText9.innerHTML = dataUrl.substr(32000, 4000);
		sigText10.innerHTML = dataUrl.substr(36000, 4000);


		sigImage.setAttribute("src", dataUrl);
	}, false);

	// Set up mouse events for drawing
	var drawing = false;
	var mousePos = { x:0, y:0 };
	var lastPos = mousePos;
	canvas.addEventListener("mousedown", function (e) {
		drawing = true;
		lastPos = getMousePos(canvas, e);
	}, false);
	canvas.addEventListener("mouseup", function (e) {
		drawing = false;
	}, false);
	canvas.addEventListener("mousemove", function (e) {
		mousePos = getMousePos(canvas, e);
	}, false);

	// Set up touch events for mobile, etc
	canvas.addEventListener("touchstart", function (e) {
		mousePos = getTouchPos(canvas, e);
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousedown", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvas.dispatchEvent(mouseEvent);
	}, false);
	canvas.addEventListener("touchend", function (e) {
		var mouseEvent = new MouseEvent("mouseup", {});
		canvas.dispatchEvent(mouseEvent);
	}, false);
	canvas.addEventListener("touchmove", function (e) {
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousemove", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvas.dispatchEvent(mouseEvent);
	}, false);

	// Prevent scrolling when touching the canvas
	document.body.addEventListener("touchstart", function (e) {
		if (e.target == canvas) {
			e.preventDefault();
		}
	}, false);
	document.body.addEventListener("touchend", function (e) {
		if (e.target == canvas) {
			e.preventDefault();
		}
	}, false);
	document.body.addEventListener("touchmove", function (e) {
		if (e.target == canvas) {
			e.preventDefault();
		}
	}, false);

	// Get the position of the mouse relative to the canvas
	function getMousePos(canvasDom, mouseEvent) {
		var rect = canvasDom.getBoundingClientRect();
		return {
			x: mouseEvent.clientX - rect.left,
			y: mouseEvent.clientY - rect.top
		};
	}

	// Get the position of a touch relative to the canvas
	function getTouchPos(canvasDom, touchEvent) {
		var rect = canvasDom.getBoundingClientRect();
		return {
			x: touchEvent.touches[0].clientX - rect.left,
			y: touchEvent.touches[0].clientY - rect.top
		};
	}

	// Draw to the canvas
	function renderCanvas() {
		if (drawing) {
			ctx.moveTo(lastPos.x, lastPos.y);
			ctx.lineTo(mousePos.x, mousePos.y);
			ctx.stroke();
			lastPos = mousePos;
		}
	}

	function clearCanvas() {
		canvas.width = canvas.width;
	}

	// Allow for animation
	(function drawLoop () {
		requestAnimFrame(drawLoop);
		renderCanvas();
	})();

})();