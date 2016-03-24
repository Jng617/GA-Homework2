// Homework #2 - Regular Expressions with Iterators Lab / Homework
// ---------------------------------


var animalArray = ["Cat", "Dog", "Polar Bear", "Grizzly Bear", "Antelope", "Kangaroo", "Bear"];

// Object constructors
function Animals(animalArray) {
	this.animal = animalArray;
};

// Using .filter()


// Return an array with only animals that have three-letter names.
Animals.prototype.threeLetterAnimal = function() {
	return this.animal.filter(function(animal) {
		return animal.length === 3;
	});
};

// // Answer
// var threeLetterPattern = /^[A-z]{3}$/i;
// var threeLetterAnimals = animals.filter(function(element){
// 	return threeLetterPattern.test(element); //true
// });


// Return an array with only animals that have two-word names.
Animals.prototype.twoWordAnimal = function() {
	return this.animal.filter(function(animal) {
		var pattern = /[A-z]+ [A-z]+/i;
		return pattern.exec(animal);

	});
};

// Return an array with only animals that don't start with the letter K.
Animals.prototype.charNotK = function() {
	return this.animal.filter(function(animal) {
		var pattern = /^((?!k).)*$/gm;
		return pattern.exec(animal);
	});
};

// Using .map()

// Return an array that changes all animal names containing "bear" to "Teddy Bear".
Animals.prototype.beartoTeddy = function() {
	return this.animal.map(function(animal) {
		return animal.replace(/bear|[A-z]+ bear/i, "Teddy Bear");
	})
};

// Write a regular expression that checks if the animal is either cat or dog. If it is cat, replace the value with "Kitty Cat" and if it is a dog replace the value with "Puppy".
Animals.prototype.rename = function(animal) {
	var patternCat = /cat/i;
	var patternDog = /dog/i;
	if(patternCat.test(animal) === true) {
		return animal.replace (patternCat, "Kitty Cat");
	} else if (patternDog.test(animal) === true) {
		return animal.replace(patternDog, "Puppy");
	}
};


var Animals = new Animals(animalArray);


// Log the results
console.log(Animals.threeLetterAnimal());
console.log(Animals.twoWordAnimal());
console.log(Animals.charNotK());
console.log(Animals.beartoTeddy());
console.log(Animals.rename());
