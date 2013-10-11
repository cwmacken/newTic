
// Default loading varibles
var p1Name = 'Player 1';
var p2Name = 'PLayer 2';
var turn=1

// $scope JS
angular.module('newTicApp')
	.controller('MainCtrl',function ($scope, angularFire){
    
    // binding these to firebase
    $scope.games = [];
    $scope.queue = {};
    

		var games = new Firebase("https://ticcm.firebaseio.com/games");
    angularFire(games, $scope, "games").then(function () {
      
      var queue = new Firebase("https://ticcm.firebaseio.com/queue");
      angularFire(games, $scope, "queue").then(function (){
        if ($scope.queue.gameId == undefined) {
          console.log("I'm player 1");
          $scope.player = "p1";

          var newGame = {
             board: $scope.ticTacToe= [['','',''],['','',''],['','','']],
            turn: 'p1',
            win: false,
            turnCount: 0
          };      

          $scope.gameId = $scope.games.push(newGame) - 1;
          $scope.queue.gameId = $scope.gameId;
          console.log("Player 1's game is: " + $scope.gameId);

        } else {
          console.log("I'm player 2");
          $scope.player = "p2";

          $scope.gameId = $scope.queue.gameId;
          $scope.queue = {};
          console.log("Player 2's game is: " + $scope.gameId);
        }
      });

    });



		$scope.choose=function (f){
		  turn = 1;
		  drawFix=1;
		  choice = f;
   	  	  $scope.p1Pick ="O"
	  	  $scope.p2Pick ="X"
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
		  $scope.ticTacToe= [['','',''],['','',''],['','','']];
		}

		angularFire(games, $scope, "ticTacToe");

  	$scope.clickSqr = function(row,column){  
  		if($scope.ticTacToe[row][column]!='X' && $scope.ticTacToe[row][column]!='O'){
  				if(turn % 2 == 1) {
  					$scope.ticTacToe[row][column]='X';
  					document.getElementById('x').innerHTML = p2Name+"'S";
  					
  				}
  				else{
  					$scope.ticTacToe[row][column]='O';
  					document.getElementById('x').innerHTML = p1Name+"'S";
  				}
  				turn++
  			}
  			else{
  				alert('Look. This... is all a mistake. I\'m just a compound interest program. I work at a savings and loan! I can\'t play these video games!')
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
  			(c=="X" && e=="X" && g=='X')){

  					document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
  					console.log($scope.ticTacToe);
  			  		document.getElementById('x').innerHTML = "";
  		  			document.getElementById('o').innerHTML = "";
  		  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
  		  			
  		  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
  		  			// NEED TO SET THE RESET CODE     setTimeout("theResetBtn();",3000);
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
  			(c=="O" && e=="O" && g=='O')){

  					document.getElementsByClassName('alertText')[0].innerHTML = p2Name+" WINS!!!";
  					console.log("O win - " + $scope.ticTacToe);
  			  		document.getElementById('x').innerHTML = "";
  		  			document.getElementById('o').innerHTML = "";
  		  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
  		  			
  		  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
  		  			// NEED TO SET THE RESET CODE     setTimeout("theResetBtn();",3000);
  			  	}

  		 else{

  		 	if(turn==10 && drawFix==1){
  		 		
  		 		document.getElementById('x').innerHTML = "";
  	  			document.getElementById('o').innerHTML = "";
  	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
  	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
  	  			// NEED TO SET THE RESET CODE     setTimeout("theResetBtn();",3000);
  	  			$scope.ticTacToe= [['','',''],['','',''],['','','']];
  		 	}
  		 }
  	}

		$scope.home=function(){
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
        	turn = 1;	
	  		drawFix=1;
	  		$scope.p1Pick ="O"
	  		$scope.p2Pick ="X"	
    };
	
  });
