

//Start of doc

$(document).ready(function() {
	var randomCrystal = Math.floor(Math.random() * (101 -19 +1) + 19) 
		//Selects random number for the start of the game

		$("#random").text(randomCrystal);

		var number1 = Math.floor(Math.random() * 11 +1);
		var number2 = Math.floor(Math.random() * 11 +1);
		var number3 = Math.floor(Math.random() * 11 +1);
		var number4 = Math.floor(Math.random() * 11 +1);

		var userTotal = 0;
		var wins = 0;
		var losses = 0;

		$("#wins").text(wins);
		$("#losses").text(losses);

		//reset game
		function reset() {
			randomCrystal = Math.floor(Math.random() * (101 -19 +1) + 19) 
			console.log(randomCrystal);
			$("#random").text(randomCrystal);
			number1 = Math.floor(Math.random() * 11 +1);
			number2 = Math.floor(Math.random() * 11 +1);
			number3 = Math.floor(Math.random() * 11 +1);
			number4 = Math.floor(Math.random() * 11 +1);
			userTotal = 0;
			$("#finalTotal").text(userTotal);

		}

		//add wins and losses

		function win() {
			wins++;
			alert("You Win!")
			$("#wins").text("wins: " + wins);
			reset();
		}

		function loss() {
			losses++;
			$("#losses").text("losses: " + losses);
			reset();
			alert("You Lose!")
		}


		$("#one").on("click", function (){
			userTotal = userTotal + number1;
			console.log("New total = " + userTotal);
			$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				win();
			}
			else if (userTotal > randomCrystal) {
				loss();
			}
		});

		$("#two").on("click", function (){
			userTotal = userTotal + number2;
			console.log("New total =" + userTotal);
			$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				win();
			}
			else if (userTotal > randomCrystal) {
				loss();
			}
		});


		
		$("#three").on("click", function (){
			userTotal = userTotal + number3;
			console.log("New total =" + userTotal);
			$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				win();
			}
			else if (userTotal > randomCrystal) {
				loss();
			}
		});


		$("#four").on("click", function (){
			userTotal = userTotal + number4;
			console.log("New total =" + userTotal);
			$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				win();
			}
			else if (userTotal > randomCrystal) {
				loss();
			}
		});

})


