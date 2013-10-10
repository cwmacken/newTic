
// Default loading varibles
var p1Name = 'Player 1';
var p2Name = 'PLayer 2';
var turn=1

// // user identifcation---Cookie
// function idUser(){
// 	console.log('iding user')
// 	// var date=getDate();
	
// 	// var exDate=setDate(date+7);

// 	var playerNumber= Math.random();

// 	// var cookieValue=escape(playerNumber) + ((exdays==null) ? "" : "; expires"+exdate.toUTCString());
// 	document.cookie=playerNumber;
// 	console.log(playerNumber);
// }



// $scope JS
angular.module('newTicApp')
	.controller('MainCtrl',function($scope, angularFire,$cookies){
		// $scope.p1Pick = "X";
		// $scope.p2Pick = "O";
		var ref = new Firebase("https://ticcm.firebaseio.com/");

		// $scope.clearBoard= function()={
		// 	$scope.ticTacToe= [['','',''],['','',''],['','','']];

		// }
		// $cookies.playerId=Math.random()

		$scope.choose=function (f){
		  console.log("choose function working")
		  console.log(f)
		  turn = 1;
		  drawFix=f;
		  choice = f;

		  if (f==2){
		  	$scope.p1Pick ="O"
		  	$scope.p2Pick ="X"
		  }

		  else{
		  	$scope.p1Pick ="X";
			$scope.p2Pick ="O";
		  }
		  $scope.playerId=Math.random()
		  console.log($scope.playerId)
		  $scope.strGame();
		  

		};
		// $scope

		$scope.home=function(){
			console.log('in fucntion')
	      	document.getElementsByClassName('alertBox')[0].style.display = "none";
	      	document.getElementById('game').style.display="none";
	      	document.getElementById('startPage').style.display="inline";
	      	$scope.ticTacToe= [['','',''],['','',''],['','','']];
	      		
		}
		$scope.theResetBtn=function(){
        	document.getElementsByClassName('alertBox')[0].style.display = "none";
        	document.getElementById('o').innerHTML = "TURN";
        	document.getElementById('x').innerHTML = p1Name+'\'S';
        	$scope.ticTacToe= [['','',''],['','',''],['','','']];
       		// for (row in $scope.ticTacToe){
        	// 	for ( column in $scope.ticTacToe[row]){
        	// 		$scope.ticTacToe[row][column] ='';
        	// 	}
       		// }
       		turn=choice;
       		console.log($scope.ticTacToe);
       		console.log(choice);
       		console.log(turn)

       			choose=function (choice){
		  		console.log("choose function working")
		  		drawFix=choice;
		  		turn=1;

		  		if (choice==2){
		  		$scope.p1Pick ="O"
		  		$scope.p2Pick ="X"
		  		}

		  		else{
		  		$scope.p1Pick ="X";
				$scope.p2Pick ="O";
		  		}
		  

			};
     	};

		// $scope.transformCell=function(c){
		// 	return (c==1?p1Pick :(c==-1?p2Pick:""));
		// };

		$scope.strGame=function(){
			console.log("in start btn")	
		  document.getElementById('game').style.display="inline";
		  document.getElementById('startPage').style.display="none";
		  var p1Hold = document.getElementById('p1').value;
		  var p2Hold = document.getElementById('p2').value;
		  document.getElementById('x').innerHTML = (p1Hold.toUpperCase())+'\'S';
		  p1Name = p1Hold.toUpperCase();
		  p2Name = p2Hold.toUpperCase();
		  return p1Name, p2Name;
		  $scope.ticTacToe= [['','',''],['','',''],['','','']];
		}

		
		console.log($scope.ticTacToe);
		angularFire(ref, $scope, "ticTacToe");

 //     $scope.resetBoard = function(){
	// 	// Simply clear out each cell in the array
	// 	for(rw in $scope.othello)
	// 		for(col in $scope.othello[rw])
	// 			$scope.othello[rw][col] = "";

	// 	// And set the two X and two O starting values
	// 	$scope.othello[3][4]=$scope.othello[4][3]="X";
	// 	$scope.othello[3][3]=$scope.othello[4][4]="O";
	// };
	
	$scope.clickSqr = function(row,column){  
		if($scope.ticTacToe[row][column]!='X' && $scope.ticTacToe[row][column]!='O'){
				if(turn % 2 == 1) {
					$scope.ticTacToe[row][column]='X';
					document.getElementById('x').innerHTML = p2Name+"'S";
					console.log(turn)
					
				}
				else{
					$scope.ticTacToe[row][column]='O';
					document.getElementById('x').innerHTML = p1Name+"'S";
					console.log(turn)
				}
				turn++
			}
			else{
				alert('CANT DO THAT')
			}
		}


	$scope.check = function(row,column) {
			// asign a unique value to each unique box name 
			var a = $scope.ticTacToe[0][0];
			var b = $scope.ticTacToe[0][1];
			var c = $scope.ticTacToe[0][2];
			var d = $scope.ticTacToe[1][0];
			var e = $scope.ticTacToe[1][1];
			var f = $scope.ticTacToe[1][2];
			var g = $scope.ticTacToe[2][0];
			var h = $scope.ticTacToe[2][1];
			var i = $scope.ticTacToe[2][2];

console.log(a+" "+b+" "+c+" "+d+" "+e+" "+f+" "+g+" "+h+" "+i);

		if(
			(a=="X" && b=="X" && c=='X') 
				|| 
			(d=="X" && e=="X" && f=='X')
				|| 
		  	(g=="X" && h=="X" && i=='X')
		  		||
		  	(a=="X" && d=="X" && g=='X') 	
		  		|| 
		  	(b=="X" && e=="X" && h=='X')
		  		|| 
			(c=="X" && f=="X" && i=='X') 
				||
			(a=="X" && e=="X" && i=='X') 
				|| 
			(c=="X" && e=="X" && g=='X')
		)	
			{
				document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
				console.log($scope.ticTacToe);
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
	  			setTimeout("$scope.theResetBtn()",3000);
		  	}
		 else if(
			(a=="O" && b=="O" && c=='O') 
				|| 
			(d=="O" && e=="O" && f=='O')
				|| 
		  	(g=="O" && h=="O" && i=='O')
		  		||
		  	(a=="O" && d=="O" && g=='O') 	
		  		|| 
		  	(b=="O" && e=="O" && h=='O')
		  		|| 
			(c=="O" && f=="O" && i=='O') 
				||
			(a=="O" && e=="O" && i=='O') 
				|| 
			(c=="O" && e=="O" && g=='O')
		)
			{
				document.getElementsByClassName('alertText')[0].innerHTML = p2Name+" WINS!!!";
				console.log("O win - " + $scope.ticTacToe);
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
	  			setTimeout("theResetBtn();",3000);
// 		  		var enableSubmit = function(ele) {
//     $(ele).removeAttr("disabled");
// }

// $("#submit").click(function() {
//     var that = this;
//     $(this).attr("disabled", true);
//     setTimeout(function() { enableSubmit(that) }, 1000);
// });
		  	}
		 else{
		 	if(turn==10 && drawFix==1){
		 		
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			setTimeout("theResetBtn();",3000);
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
		 	}
		 	else if(turn==11 && drawFix==2){
		 		
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			setTimeout("theResetBtn();",3000);
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
		 	}

		 }
		}
	});
