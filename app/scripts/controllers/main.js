var p1Name = 'Player 1';
var p2Name = 'PLayer 2';



function home(){
  // var lookup=['a','b','c','d','e','f','g','h','i'];

//   for(var z=0;z<=8;z++){
   
//         document.getElementById(lookup[z]).value=0;
//         document.getElementById(lookup[z]).innerHTML="";
        
//         turn =1
// };
      document.getElementsByClassName('alertBox')[0].style.display = "none";
      document.getElementById('game').style.display="none";
      document.getElementById('startPage').style.display="inline";
		reset();		
}

var turn=1



angular.module('newTicApp')
	.controller('MainCtrl',function($scope){
		$scope.p1Pick = "X";
		$scope.p2Pick = "O";

		$scope.choose=function (x){
		  console.log("choose function working")
		  // var pickX = "O";
		  // var pickO = "X";
		  // choiceX = pickX ;
		  // choiceO = pickO;
		  turn = x;
		  drawFix=x;
		  
		  // return choiceX, choiceO;
		  if (x==2){
		  	p1Score = -1;
		  	p2Score = 1
		  	$scope.p1Pick ="O"
		  	$scope.p2Pick ="X"
		  }

		  else{
		  	p1Score =1;
		  	p2Score= -1;
		  	$scope.p1Pick = "X";
			$scope.p2Pick = "O";
		  }
		  
		  $scope.strGame();

		};

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

		$scope.ticTacToe= [[0,0,0],[0,0,0],[0,0,0]];

	 $scope.abcd= function(row,column){
	 	console.log('111');
        console.log('2222');
        document.getElementsByClassName('alertBox')[0].style.display = "none";
        document.getElementById('o').innerHTML = "TURN";
        document.getElementById('x').innerHTML = p1Name+'\'S';
        // p1Pick ="";
        // p2Pick ="";
        // document.getElementsByClassName('boardClear').innerHTML="";
       for (row in $scope.ticTacToe){
        for ( column in $scope.ticTacToe[row]){
        	$scope.ticTacToe[row][column] = 0;
         	
        }
       }
       console.log($scope.ticTacToe);
     }; 

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
		if ($scope.ticTacToe[row][column]==0) {							
			if(turn % 2 ==1) {
				// event.target.innerHTML="X";
				$scope.ticTacToe[row][column]=p1Score;
				document.getElementById('x').innerHTML = p2Name+'\'S';
			}
			else{
				// event.target.innerHTML="O"
				$scope.ticTacToe[row][column]=p2Score;
				document.getElementById('x').innerHTML = p1Name+'\'S';	
			}
			turn++
		}
		else{

		};
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
		

		if(
			(a+b+c==3) 
				|| 
			(d+e+f==3)
				|| 
		  	(g+h+i==3)
		  		||
		  	(a+d+g==3) 	
		  		|| 
		  	(b+e+h==3)
		  		|| 
			(c+f+i==3) 
				||
			(a+e+i==3) 
				|| 
			(c+e+g==3)
		)	
			{
		  		alert('1p WINS');
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
	  			// setTimeout("reset();",3000);
		  	}
		 else if(
			(a+b+c==-3) 
				|| 
			(d+e+f==-3)
				|| 
		  	(g+h+i==-3)
		  		||
		  	(a+d+g==-3) 	
		  		|| 
		  	(b+e+h==-3)
		  		|| 
			(c+f+i==-3) 
				||
			(a+e+i==-3) 
				|| 
			(c+e+g==-3)
		)
			{
		  		alert('2p WINS');
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = p2Name+" WINS!!!";
	  			// setTimeout("reset();",3000);
		  		
		  	}
		 else{
		 	if(turn==10 && drawFix==1){
		 		alert('DRAW.....')
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			setTimeout("reset();",3000);
		 	}
		 	else if(turn==11 && drawFix==2){
		 		alert('DRAW.....')
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			// setTimeout("reset();",3000);
		 	}
		 	else{

		 	}
		 }
		}
		
	});

