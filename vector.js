var vector = {x: 0, y: 0, z: 0};

function VectorConstruct(x, y, z){
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
		for(var i = 0; i < s.length; i++){
			answer *= 10;
			answer += s.charAt(i) - '0';
		}
	}
	return answer;
}


function addVector(v1, v2){
	var answer = VectorConstruct(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
	return answer;
}