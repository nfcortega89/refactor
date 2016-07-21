var int = prompt("Enter a number!");

function fizzbuzz(int){
	for(var i = 1; i <= int; i++){
		if(i % 3 == 0){
			console.log("fizzbuzz");
		} else if (i % 2 != 0){
			console.log("fizz");
		} else console.log("buzz");
	}
}

fizzbuzz(int);