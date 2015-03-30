function updateImg (){
	var url = $( "#url" ).val();
	meme.src = url;
}

function textChangeListener (evt) {
      var id = evt.target.id;
      var value = evt.target.value;
      switch (id) {
      	case "upperText" :
      		window.upperText = value;
      		break;
      	case "lowerText":
      		window.lowerText = value;
      		break;
      	case "font":
      		window.font = value;
      		break;
      	case "fontSize":
      		window.fontSize = value+"px";
      		break;
      	default :
      		console.log("wrong event input")
      }
      
      
      drawCanvas()
    }



function saveImg() {
	var canvas = document.getElementById('canvas');

	$("#saveButton").attr("href", canvas.toDataURL("image/png"));
	$("#saveButton").attr("download", $("#saveName").val());
	
	//var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
	//window.location.href=image; // it will save locally
}

function drawCanvas() {
	ctx.drawImage(meme,0,0, 400, 400);
	ctx.textAlign = "center";
	ctx.font = fontSize+" " +fontType+" " +font;
	console.log(upperText)
	ctx.fillStyle = "white";

	ctx.fillText(upperText,200, 50);
	ctx.fillText(lowerText,200, 370);

	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;

	ctx.strokeText(upperText,200, 50);
	ctx.strokeText(lowerText,200, 370);
}


//TODO: Rewrite the updateUpper and updateLower functions to reduce code redundancy

function updateUpper() {
	var text = $( "#upperText" ).val();
	upperText = text;
	ctx.restore();
	drawCanvas();
}

function updateLower() {
	var text = $( "#lowerText" ).val();
	lowerText = text;
	ctx.restore();
	drawCanvas();
}

//TODO: Add function to convert the meme to black and white, or to invert the colors

