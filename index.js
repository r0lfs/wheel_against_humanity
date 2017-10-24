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
		this.guessed = [];
		this.correct = [];
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

		this.displayConsonants();
		this.displayVowels();
		this.gameWon();
	}

	phraseGuess(phrase){
		if (phrase === this.answer) {
			this.gameWon();
		}else{
			alert('Wrong!');
		}
	}

	gameWon(){

	}

	displayConsonants() {
  	$('#consonants').empty();

  	for (var i = 0; i < this.consArray.length; i++) {
  		if (!this.guessed.includes(this.consArray[i])){
  			$('#consonants').append(`<div class="col" style="color: red; font-size: 3em;" data-letter='${this.consArray[i]}'> ${this.consArray[i]}</div>`);
  		}
    }
  }

  displayVowels() {
  	$('#vowels').empty();

  	for (var i = 0; i < this.vowelArray.length; i++) {
  		if (!this.guessed.includes(this.vowelArray[i])){
  			$('#vowels').append(`<div class="col" style="color: red; font-size: 3em;" data-letter="${this.vowelArray[i]}"> ${this.vowelArray[i]}</div>`);
  		}
    }
  }

} //ends WheelGame


$(document).ready(function() {

	let unfortunate = new WheelGame(hintArray, wordArray);

	unfortunate.start();

	$(document).on('click', '.col', function(){
		let letter = $(this).data('letter');
		unfortunate.guess(letter);
	});


	$('#solve1').click(function(){
		$('#solveShow1').css('visibility', 'visible');
	})

	$('#solveSubmit1').click(function(){
		let guess_it = $('#solveIt1').val().toUpperCase();
		console.log(guess_it);
		unfortunate.phraseGuess(guess_it);
	})


}); // End of Document Ready Function