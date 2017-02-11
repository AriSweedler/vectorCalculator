function Vector(x, y, z){
	this.x = toNum(x);
	this.y = toNum(y);
	this.z = toNum(z);

	console.log("Your new vector is (" + x + ", " + y + ", " + z + ").");
}

function toNum(s){
	var answer = 0;

	if(typeof(s) == "number") {
		answer = s;
	}
	else if (typeof(s) == "string") {
		for(var i = 0; i < s.length; i++){
			answer *= 10;
			answer += s.charAt(i) - '0';
		}
	}
	return answer;
}


function addVector(v1, v2){
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
	var answer = 0;
	for(var n in v1){
		answer += v1[n]*v2[n];
	}
	return answer;
}