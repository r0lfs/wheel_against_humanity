const hintArray = ["I DRINK TO FORGET", " Testing Testing"];
const wordArray = ["TEST AGAIN", "DROWNING IN DEBT"];

class WheelGame {

	constructor(hints, answers){
		this.hint = hintArray[Math.floor(Math.random()*(hintArray.length))];
		this.answer = wordArray[Math.floor(Math.random()*(wordArray.length))];

		this.guessed = [];
		this.correct = [];


		this.consArray = ['B', 'C', 'D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
		this.vowelArray = ['A','E','I','O','U'];
		
	}

	//loads hint, blank spaces, and letter lists
	start(){
		for (var i = 0; i < this.answer.length; i++) {
			if (this.answer[i] !== ' ') {
				$(`#gr${i}`).css('visibility', 'visible');
			}
		}

		$('#hint').text(this.hint);
		this.displayConsonants();
		this.displayVowels();
	}

	guess(letter){
		if (this.answer.includes(letter)) {
			for (var i = 0; i < this.answer.length; i++) {
				if(this.answer[i] === letter){
					$(`#gr${i}`).text(letter);
				}
			}
			this.correct.push(letter);
			this.guessed.push(letter);
		}else{
			this.guessed.push(letter);
		}
	}

	phraseGuess(phrase){
		if (phrase === this.answer) {
			console.log('Win');
		}else{
			console.log('fail');
		}
	}


	displayConsonants() {
  	$('#consonants').empty();
  	// $('#consonants').append(`<div class="col" style="color: red; font-size: 3em;">Consonants:</div>`);

  	for (var i = 0; i < this.consArray.length; i++) {
    	$('#consonants').append(`<div class="col" style="color: red; font-size: 3em;" data.letter="${this.consArray[i]}"> ${this.consArray[i]}</div>`);
    }
  }

  displayVowels() {
  	$('#vowels').empty();
  	// $('#vowels').append(`<div class="col-2" style="color: red; font-size: 3em;">Vowels:</div>`);
  	for (var i = 0; i < this.vowelArray.length; i++) {
    	$('#vowels').append(`<div class="col" style="color: red; font-size: 3em;" data.letter="${this.vowelArray[i]}"> ${this.vowelArray[i]}</div>`);
    }
  }
} //ends WheelGame


$(document).ready(function() {

	let unfortunate = new WheelGame(hintArray, wordArray);

	unfortunate.start();

	$(document).on('click', '#consonants', function(){
		console.log($(this).data.letter);
		let blinger = $(this).val();
		console.log(blinger);
		// console.log(letter);
		// unfortunate.guess(letter);
	});

	$('#solveSubmit1').click(function(){
		let guess_it = $('#solveIt1').val().toUpperCase();
		console.log(guess_it);
		unfortunate.phraseGuess(guess_it);
	})


	unfortunate.guess('O');
	unfortunate.guess('I');
	unfortunate.guess('E');
	unfortunate.guess('D');
	unfortunate.guess('B');
	unfortunate.guess('N');

	console.log()


}); // End of Document Ready Function