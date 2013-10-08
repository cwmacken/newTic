var p1Name = 'Player 1';
var p2Name = 'PLayer 2';
var turn=1



angular.module('newTicApp')
	.controller('MainCtrl',function($scope){
		$scope.p1Pick = "X";
		$scope.p2Pick = "O";

		$scope.choose=function (x){
		  console.log("choose function working")
		  turn = x;
		  drawFix=x;

		  if (x==2){
		  	$scope.p1Pick ="O"
		  	$scope.p2Pick ="X"
		  }

		  else{
		  	$scope.p1Pick ="X";
			$scope.p2Pick ="O";
		  }
		  
		  $scope.strGame();

		};

		$scope.home=function(){
			console.log('in fucntion')
	      	document.getElementsByClassName('alertBox')[0].style.display = "none";
	      	document.getElementById('game').style.display="none";
	      	document.getElementById('startPage').style.display="inline";	
		}
		$scope.theResetBtn= function(){
        	document.getElementsByClassName('alertBox')[0].style.display = "none";
        	document.getElementById('o').innerHTML = "TURN";
        	document.getElementById('x').innerHTML = p1Name+'\'S';
        	$scope.ticTacToe= [['','',''],['','',''],['','','']];
       		// for (row in $scope.ticTacToe){
        	// 	for ( column in $scope.ticTacToe[row]){
        	// 		$scope.ticTacToe[row][column] ='';
        	// 	}
       		// }
       		turn=1;
       		console.log($scope.ticTacToe);
     	};

		// $scope.transformCell=function(c){
		// 	return (c==1?p1Pick :(c==-1?p2Pick:""));
		// };

		$scope.strGame=function(){
		  document.getElementById('game').style.display="inline";
		  document.getElementById('startPage').style.display="none";
		  var p1Hold = document.getElementById('p1').value;
		  var p2Hold = document.getElementById('p2').value;
		  document.getElementById('x').innerHTML = (p1Hold.toUpperCase())+'\'S';
		  p1Name = p1Hold.toUpperCase();
		  p2Name = p2Hold.toUpperCase();
		  return p1Name, p2Name;
		}

		$scope.ticTacToe= [['','',''],['','',''],['','','']];
		console.log($scope.ticTacToe);

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
					document.getElementsByClassName('alertText')[0].innerHTML = p2Name+" WINS!!!";
					
				}
				else{
					$scope.ticTacToe[row][column]='O';
					document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
					
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
				console.log($scope.ticTacToe);
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
	  			// setTimeout("reset();",3000);
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
				console.log("O win - " + $scope.ticTacToe);
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = p2Name+" WINS!!!";
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
	  			// setTimeout("reset();",3000);
		  		
		  	}
		 else{
		 	if(turn==10 && drawFix==1){
		 		alert('DRAW.....')
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			// setTimeout("reset();",3000);
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
		 	}
		 	else if(turn==11 && drawFix==2){
		 		alert('DRAW.....')
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			// setTimeout("reset();",3000);
	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
		 	}

		 }
		}
		
	});

