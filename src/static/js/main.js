function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

//given an array of ids, start the weather plugin on those elements
function makeItRain(elements){
	var options = {
		speed:getRandomInt(3,10),
		dropDensity:getRandomInt(5,20),
		wind:getRandomInt(-10,10),
		dropHeight:1,
		dropColor:[0,0,0]
	};
	for(var i = 0; i < elements.length; i++){
		new weatherObj(document.getElementById(elements[i]),options);
	}
}
