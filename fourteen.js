var x = [];
for(var i = 0; i<4; i++){
	x[i] = () => console.log(i);
}

for(var k = 0; k<4; k++){
	x[k]();
}
