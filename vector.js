function Vector(x, y, z){
	this.x = toNum(x);
	this.y = toNum(y);
	this.z = toNum(z);

	//console.log("Your new vector is (" + x + ", " + y + ", " + z + ").");
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