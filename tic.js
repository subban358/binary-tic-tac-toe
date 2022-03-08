// Function called whenever user tab on any box
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b14, b15, b16;
var isResultDecided = false

let map = new Map();

map.set('1', 'str1');   
map.set(1, 'num1');
map.set(true, 'bool1'); 

function checkingWin(player, combos){

	for(let i = 0; i < combos.length; i++){
		var winCondition = combos[i]
		if(winCondition[0] == player && winCondition[1] == player && winCondition[2] == player && winCondition[3] == player){
			for(let i = 1; i <= 16; i ++){
				var p = "b"+i;
				if(winCondition[0] != p && winCondition[1] != p && winCondition[2] != p && winCondition[3] != p){
					document.getElementById(p).disabled = true;
				}
			}
			return true;
		}
	}
	return false;
}
function myfunc() {
	// Setting DOM to all boxes or input field
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	b10 = document.getElementById("b10").value; 
	b11 = document.getElementById("b11").value; 
	b12 = document.getElementById("b12").value; 
	b13 = document.getElementById("b13").value; 
	b14 = document.getElementById("b14").value; 
	b15 = document.getElementById("b15").value; 
	b16 = document.getElementById("b16").value; 
	var combos = [
		[b1, b2, b3, b4],
		[b5, b6, b7, b8],
		[b9, b10, b11, b12],
		[b13, b14, b15, b16],
		[b1, b5, b9, b13],
		[b2, b6, b10, b14],
		[b3, b7, b11, b15],
		[b4, b8, b12, b16],
		[b1, b6, b11, b16],
		[b13, b10, b7, b4]
	];
	
	for(let i = 0; i < combos.length; i++){
		var winCondition = combos[i]
		if(winCondition[0] && winCondition[1] && winCondition[2] && winCondition[3] && !isResultDecided){
			console.log("inside if !!")
			var f1 = checkingWin("1", combos)
			var f2 = checkingWin("0", combos)
			if(f1){
				document.getElementById('result').innerHTML = "Player 1 won";
				isResultDecided = true;
			}
			else if(f2){
				document.getElementById('result').innerHTML = "Player 0 won";
				isResultDecided = true;
			}
		}
		if(b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11 && b12 && b13 && b14 && b15 && b16 && !isResultDecided){
			var fl1 = checkingWin("1", combos)
			var fl2 = checkingWin("0", combos)
			if(!fl1 && !fl2){
				var sum1 = 0;
				var sum0 = 0;
				for(let i = 0; i < 4; i++){
					var options1 = combos[i];
					var options2 = combos[i+4];
					var s1 = options1[0]+options1[1]+options1[2]+options1[3];
					var s2 = options2[0]+options2[1]+options2[2]+options2[3];

					sum1 += parseInt(s1.replace(/^0/,''), 2)
					sum0 += parseInt(s2.replace(/^0/,''), 2)
				}
				document.getElementById('sum0').innerHTML = "Sum of player 0: " + sum0;
				document.getElementById('sum1').innerHTML = "Sum of player 1: " + sum1;
				if(sum1 > sum0){
					document.getElementById('result').innerHTML = "Player 1 won";
				}
				else{
					document.getElementById('result').innerHTML = "Player 0 won";
				}
				isResultDecided = true;
			}
		}
		else if(!isResultDecided){
			if (flag == 1) {
				document.getElementById('print').innerHTML = "Player 1 Turn";
			}
			else {
				document.getElementById('print').innerHTML = "Player 0 Turn";
			}
		}
	}
	
	

	// // Checking if Player 1 won or not and after
	// // that disabled all the other fields
	// if ((b1 == 'x' || b1 == '1') && (b2 == 'x' ||
	// 	b2 == '1') && (b3 == 'x' || b3 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 1 won');
	// }
	// else if ((b1 == 'x' || b1 == '1') && (b4 == 'x' ||
	// 	b4 == '1') && (b7 == 'x' || b7 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;

	// 	window.alert('Player 1 won');
	// }
	// else if ((b7 == 'x' || b7 == '1') && (b8 == 'x' ||
	// 	b8 == '1') && (b9 == 'x' || b9 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	window.alert('Player 1 won');
	// }
	// else if ((b3 == 'x' || b3 == '1') && (b6 == 'x' ||
	// 	b6 == '1') && (b9 == 'x' || b9 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	window.alert('Player 1 won');
	// }
	// else if ((b1 == 'x' || b1 == '1') && (b5 == 'x' ||
	// 	b5 == '1') && (b9 == 'x' || b9 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	window.alert('Player 1 won');
	// }
	// else if ((b3 == 'x' || b3 == '1') && (b5 == 'x' ||
	// 	b5 == '1') && (b7 == 'x' || b7 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 1 won');
	// }
	// else if ((b2 == 'x' || b2 == '1') && (b5 == 'x' ||
	// 	b5 == '1') && (b8 == 'x' || b8 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 1 won');
	// }
	// else if ((b4 == 'x' || b4 == '1') && (b5 == 'x' ||
	// 	b5 == '1') && (b6 == 'x' || b6 == '1')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 1 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 1 won');
	// }

	// // Checking of Player 1 finish
	// // Checking for Player 0 starts, Is player 0 won or
	// // not and after that disabled all the other fields
	// else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
	// 	b2 == '0') && (b3 == '0' || b3 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
	// 	b4 == '0') && (b7 == '0' || b7 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
	// 	b8 == '0') && (b9 == '0' || b9 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
	// 	b6 == '0') && (b9 == '0' || b9 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b5").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
	// 	b5 == '0') && (b9 == '0' || b9 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
	// 	b5 == '0') && (b7 == '0' || b7 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
	// 	b5 == '0') && (b8 == '0' || b8 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b4").disabled = true;
	// 	document.getElementById("b6").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 0 won');
	// }
	// else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
	// 	b5 == '0') && (b6 == '0' || b6 == '0')) {
	// 	document.getElementById('print')
	// 		.innerHTML = "Player 0 won";
	// 	document.getElementById("b1").disabled = true;
	// 	document.getElementById("b2").disabled = true;
	// 	document.getElementById("b3").disabled = true;
	// 	document.getElementById("b7").disabled = true;
	// 	document.getElementById("b8").disabled = true;
	// 	document.getElementById("b9").disabled = true;
	// 	window.alert('Player 0 won');
	// }

	// // Checking of Player 0 finish
	// // Here, Checking about Tie
	// else if ((b1 == '1' || b1 == '0') && (b2 == '1'
	// 	|| b2 == '0') && (b3 == '1' || b3 == '0') &&
	// 	(b4 == '1' || b4 == '0') && (b5 == '1' ||
	// 	b5 == '0') && (b6 == '1' || b6 == '0') &&
	// 	(b7 == '1' || b7 == '0') && (b8 == '1' ||
	// 	b8 == '0') && (b9 == '1' || b9 == '0')) {
	// 		document.getElementById('print')
	// 			.innerHTML = "Match Tie";
	// 		window.alert('Match Tie');
	// }
	// else {

	// 	// Here, Printing Result
	// 	if (flag == 1) {
	// 		document.getElementById('print')
	// 			.innerHTML = "Player 1 Turn";
	// 	}
	// 	else {
	// 		document.getElementById('print')
	// 			.innerHTML = "Player 0 Turn";
	// 	}
	// }
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value 1 or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "1";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "1";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "1";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "1";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "1";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "1";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "1";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "1";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "1";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}

function myfunc_12() {
	if (flag == 1) {
		document.getElementById("b10").value = "1";
		document.getElementById("b10").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b10").value = "0";
		document.getElementById("b10").disabled = true;
		flag = 1;
	}
}

function myfunc_13() {
	if (flag == 1) {
		document.getElementById("b11").value = "1";
		document.getElementById("b11").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b11").value = "0";
		document.getElementById("b11").disabled = true;
		flag = 1;
	}
}


function myfunc_14() {
	if (flag == 1) {
		document.getElementById("b12").value = "1";
		document.getElementById("b12").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b12").value = "0";
		document.getElementById("b12").disabled = true;
		flag = 1;
	}
}


function myfunc_15() {
	if (flag == 1) {
		document.getElementById("b13").value = "1";
		document.getElementById("b13").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b13").value = "0";
		document.getElementById("b13").disabled = true;
		flag = 1;
	}
}

function myfunc_16() {
	if (flag == 1) {
		document.getElementById("b14").value = "1";
		document.getElementById("b14").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b14").value = "0";
		document.getElementById("b14").disabled = true;
		flag = 1;
	}
}

function myfunc_17() {
	if (flag == 1) {
		document.getElementById("b15").value = "1";
		document.getElementById("b15").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b15").value = "0";
		document.getElementById("b15").disabled = true;
		flag = 1;
	}
}

function myfunc_18() {
	if (flag == 1) {
		document.getElementById("b16").value = "1";
		document.getElementById("b16").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b16").value = "0";
		document.getElementById("b16").disabled = true;
		flag = 1;
	}
}
