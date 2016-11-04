			/*** Get IDs for Elements ***/
			var tdWins = document.getElementById('numWins');
			var tdLosses = document.getElementById('numLosses');
			var tdTotalGuesses = document.getElementById('numGuesses');
			var tdGuessLeft = document.getElementById('numGuessLeft');
			var btnReset = document.getElementById('btnReset');
			var btnPlayAgain = document.getElementById('btnPlayAgain');
			var btnAnswer = document.getElementById('btnAnswer');			
			var results = document.getElementById('results');
			var randomLetter = document.getElementById('randomLetter');
			var txtUserAnswer = document.getElementById('txtUserAnswer');
			var userAnswer = document.getElementById('userAnswer');
			var answerStatus = document.getElementById('answerStatus');
			var isGameOver = document.getElementById('gameOver');
			
			
			
			/*** Create and initialize variables needed ***/
			var wins = 0;
			var losses = 0;
			var totalGuess = 0;
			var guessLeft = 0;
			var counter = 0;
			var guessLimit = 9;
			
			randomLetter.innerHTML = getRandomLetter();
			
			/*** Set the table cells with the initialized values ***/
			tdWins.innerHTML = wins;
			tdLosses.innerHTML = losses;
			tdTotalGuesses.innerHTML = totalGuess;
			tdGuessLeft.innerHTML = guessLeft;
			
			/* Disable the play again button when game first starts */
			btnPlayAgain.disabled = true;
			 
			/*** Reset Button click event ***/ 
			btnReset.onclick = function(){
				location.reload();
			}
			
			
			/*** Play Again Button click event ***/ 
			btnPlayAgain.onclick = function(){
				randomLetter.innerHTML = getRandomLetter();				
				this.disabled = true;
				
				/* Enable the answer button */
				btnAnswer.disabled = false;
				results.className = 'row hidden';
				txtUserAnswer.value = '';
				userAnswer.innerHTML = '';
				userAnswer.className = 'bold-text';
				
			}
			
			/*** Answer Button click event ***/ 
			btnAnswer.onclick = function(){		
				if(txtUserAnswer.value == ''){
					alert('Please enter your answer;');
					return false;
				}
				
				this.disabled = true;
				results.className = 'row';				
				
				
				var answerEntered = txtUserAnswer.value.toUpperCase();
								
				userAnswer.innerHTML = answerEntered;
				
				/* Enable the play again button */
				btnPlayAgain.disabled = false;
				
								
				
				
				/* If Else condition to set Incorrect or Correct text*/
				if(answerEntered == randomLetter.innerText){
					userAnswer.className += ' alert alert-success';
					answerStatus.innerHTML = 'Correct!';
					answerStatus.className = 'text-success';
					wins++;
				}else{
					userAnswer.className += ' alert alert-danger';
					answerStatus.innerHTML = 'Incorrect';
					answerStatus.className = 'text-danger';
					losses++;
				}
				
				/* Set Wins and Losses */
				tdWins.innerHTML = wins;
				tdLosses.innerHTML = losses;
				txtUserAnswer.value = '';
				
				
				/* Increase counter by 1*/
				counter++;
				tdTotalGuesses.innerHTML = counter;
				tdGuessLeft.innerHTML = guessLimit - counter;
				
				/*If condition to check if guess limit is reached  */
				if(counter >= guessLimit){
					btnPlayAgain.disabled = true;
					isGameOver.className = 'alert alert-warning';
					txtUserAnswer.value = '';
					txtUserAnswer.disabled = true;	
					tdGuessLeft.innerHTML = 0;			
					
				}
			}
			
			function getRandomLetter(){
				var letters = [
							   "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
							   "p","q","r","s","t","u","v","w","x","y","z"
							  ];
				var letterIndex = Math.floor(Math.random() * letters.length);
				letterToGuess = letters[letterIndex];
				return letterToGuess.toUpperCase();
			}
			
			function lettersOnly(evt) {
			   evt = (evt) ? evt : event;
			   var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
				  ((evt.which) ? evt.which : 0));
			   if (charCode > 31 && (charCode < 65 || charCode > 90) &&
				  (charCode < 97 || charCode > 122)) {
				  alert("Enter letters only.");
				  return false;
			   }
			   return true;
		 }
