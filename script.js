var buttonNum = 0;
$(document).ready(function(){
    $("#addButton").click(function(){
      //$("#addButton").removeClass("bttnIsActive");
      buttonNum = 1;
      $(this).toggleClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#scalarContain").hide();
      $("#optionContain").css({"display": "-webkit-flex", "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "-webkit-column", "flex-direction": "column"});
      $("#wContain").css({"display": "block"});
      $("#submitButton").show();
      $("#vAddW").show();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    $("#subButton").click(function(){
      //$("#subButton").removeClass("bttnIsActive");
      buttonNum = 2;
      $(this).toggleClass("bttnIsActive");
      $("#addButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#scalarContain").hide();
      $("#optionContain").css({"display": "-webkit-flex", "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "-webkit-column", "flex-direction": "column"});
      $("#wContain").css({"display": "block"});
      $("#submitButton").show();
      $("#vAddW").hide();
      $("#vSubW").show();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    $("#scalarMult").click(function(){
      //$("#scalarMult").removeClass("bttnIsActive");
      buttonNum = 3;
      $(this).toggleClass("bttnIsActive"); 
      $("#addButton").removeClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#wContain").hide();
      $("#optionContain").css({"display": "-webkit-flex", "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "-webkit-column", "flex-direction": "column"});
      $("#scalarContain").css({"display": "block"});
      $("#submitButton").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").show();
      $("#vDotW").hide();
      $("#crossProdResult").hide();
    });
    $("#dotProd").click(function(){
      //$("#dotProd").removeClass("bttnIsActive");
      buttonNum = 4;
      $(this).toggleClass("bttnIsActive"); 
      $("#addButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#crossProd").removeClass("bttnIsActive");
      $("#scalarContain").hide();
      $("#optionContain").css({"display": "-webkit-flex", "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "-webkit-column", "flex-direction": "column"});
      $("#wContain").css({"display": "block"});
      $("#submitButton").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").show();
      $("#crossProdResult").hide();
    });
    $("#crossProd").click(function(){
      //$("#crossProd").removeClass("bttnIsActive");
      buttonNum = 5;
      $(this).toggleClass("bttnIsActive"); 
      $("#addButton").removeClass("bttnIsActive");
      $("#scalarMult").removeClass("bttnIsActive");
      $("#dotProd").removeClass("bttnIsActive");
      $("#subButton").removeClass("bttnIsActive");
      $("#scalarContain").hide();
      $("#optionContain").css({"display": "-webkit-flex", "display": "flex", "justify-content": "center", "align-items": "center", "flex-direction": "-webkit-column", "flex-direction": "column"});
      $("#wContain").css({"display": "block"});
      $("#submitButton").show();
      $("#vAddW").hide();
      $("#vSubW").hide();
      $("#scalMultResult").hide();
      $("#vDotW").hide();
      $("#crossProdResult").show();
    });
});
function Vector(x, y, z){
	this.x = toNum(x);
	this.y = toNum(y);
	this.z = toNum(z);

	console.log("Your new vector is (" + x + ", " + y + ", " + z + ").");
}

$("#submitButton").click(function() {

	console.log("Clicked!")

	//var i = 1; //figure out buttone number i
	switch(buttonNum){
		case 1:
			dealWithAdd();
			break;
		case 2:
			dealWithSubtract();
			break;
		case 3:
			dealWithScalarMult();
			break;
		case 4:
			dealWithDot();
			break;
		case 5:
			dealWithCross();
			break;
		default:
			console.log("No method chosen");
	}
});

function dealWithAdd(){
	console.log("adding");

	var vx = $('#numV1').val();
	var vy = $('#numV2').val();
	var vz = $('#numV3').val();
	var vectorV = new Vector(vx, vy, vz);

	var wx = $('#numW1').val();
	var wy = $('#numW2').val();
	var wz = $('#numW3').val();
	var vectorW = new Vector(wx, wy, wz);

	var answer = addVector(vectorV, vectorW);
	console.log(answer);
}

function dealWithSubtract(){
	console.log("subtracting");

	var vx = $('#numV1').val();
	var vy = $('#numV2').val();
	var vz = $('#numV3').val();
	var vectorV = new Vector(vx, vy, vz);

	var wx = $('#numW1').val();
	var wy = $('#numW2').val();
	var wz = $('#numW3').val();
	var vectorW = new Vector(wx, wy, wz);

	var answer = subtractVector(vectorV, vectorW);

	console.log(answer);
}

function dealWithDot(){
	console.log("finding dot product");

	var vx = $('#numV1').val();
	var vy = $('#numV2').val();
	var vz = $('#numV3').val();
	var vectorV = new Vector(vx, vy, vz);

	var wx = $('#numW1').val();
	var wy = $('#numW2').val();
	var wz = $('#numW3').val();
	var vectorW = new Vector(wx, wy, wz);

	var answer = dotProduct(vectorV, vectorW);
	console.log(answer);
}

function dealWithCross(){
	console.log("finding cross product");

	var vx = $('#numV1').val();
	var vy = $('#numV2').val();
	var vz = $('#numV3').val();
	var vectorV = new Vector(vx, vy, vz);

	var wx = $('#numW1').val();
	var wy = $('#numW2').val();
	var wz = $('#numW3').val();
	var vectorW = new Vector(wx, wy, wz);

	var answer = crossProduct(vectorV, vectorW);

	console.log(answer);
}

function dealWithScalarMult(){
	console.log("scalar multiplication");

	var vx = $('#numV1').val();
	var vy = $('#numV2').val();
	var vz = $('#numV3').val();
	var vectorV = new Vector(vx, vy, vz);

	var lambda = $('#scalMult').val();

	var answer = scaleVector(vectorV, lambda);
	
	console.log(answer);
}



function toNum(s){
	var answer = 0;

	if(typeof(s) == "number") {
		answer = s;
	}
	else if (typeof(s) == "string") {

		if (s == ""){
			return null;
		}

		for(var i = 0; i < s.length; i++){
			answer *= 10;
			answer += s.charAt(i) - '0';
		}
	}
	return answer;
}


function addVector(v1, v2){
	if (vectorLength(v1) != vectorLength(v2)){
		console.log("invalid vector lengths");
		return;
	}

	var answer = v1;
	for(var n in v1){
		answer[n] = v1[n] + v2[n];
	}
	return answer;
}

function scaleVector(v1, lambda){
	var answer = v1;
	for (var n in v1){
		answer[n] *= lambda;
	}
	return answer;
}

function subtractVector(v1, v2){
	var negativev2 = scaleVector(v2, -1);
	var answer = addVector(v1, negativev2);
	return answer;
}

function dotProduct(v1, v2){
	if (vectorLength(v1) != vectorLength(v2)){
		console.log("invalid vector lengths");
		return;
	}

	var answer = 0;
	for(var n in v1){
		answer += v1[n]*v2[n];
	}
	return answer;
}

function vectorLength(v){
	var count = 0;
	for(n in v){
		if (v[n] != null){
			count++;
		}
	}
	return count;
}

function crossProduct(v1, v2){
	if (vectorLength(v1) != 3 || vectorLength(v2) != 3){
		console.log("Lengths are not both 3, terminating.");
		return;
	}

	var answer = new Vector(0, 0, 0);
	answer.x = (v1.y*v2.z - v2.y*v1.z);
	answer.y = (v1.z*v2.x - v2.z*v1.x) * -1;
	answer.z = (v1.x*v2.y - v2.x*v1.y);

	for(var n in answer){
		if (answer[n] === 0){
			answer[n] = 0;
		}
	}	// prevents answers from equalling -0

	return answer;
}


