
// Default loading varibles
var p1Name = 'Player 1';
var p2Name = 'PLayer 2';
var turn=1

// $scope JS
angular.module('newTicApp')
	.controller('MainCtrl',function ($scope, angularFire){
    
    // binding these to firebase
    $scope.game = [];
    $scope.queue = {};

		var game = new Firebase("https://ticcm.firebaseio.com/game");
    angularFire(game, $scope, "game").then(function () {
      
      var queue = new Firebase("https://ticcm.firebaseio.com/queue");
      angularFire(queue, $scope, "queue").then(function (){
        if ($scope.queue.gameId == undefined) {
          console.log("I'm player 1");
          $scope.player = "p1";

          var newGame = {
            ticTacToe: [['','',''],['','',''],['','','']],
            turn: 'X',
            win: false,
            turnCount: 0
          };      

          $scope.gameId = $scope.game.push(newGame) - 1;
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
		  $scope.strGame();
		};

		$scope.strGame=function(){
		  document.getElementById('game').style.display="inline";
		  document.getElementById('startPage').style.display="none";
		  // var p1Hold = document.getElementById('p1').value;
		  // var p2Hold = document.getElementById('p2').value;
		  document.getElementById('x').innerHTML = ($scope.game[$scope.gameId].turn)+'\'S';
		  // p1Name = p1Hold.toUpperCase();
		  // p2Name = p2Hold.toUpperCase();
		  // return p1Name, 
    //   p2Name
      ;
		}

		// angularFire(game, $scope, "ticTacToe");
// game[gameId].ticTacToe
  	$scope.clickSqr = function(row,column){  
  		if($scope.game[$scope.gameId].ticTacToe[row][column]!='X' && $scope.game[$scope.gameId].ticTacToe[row][column]!='O'){
  			 if ($scope.player =='p1'){
              if($scope.game[$scope.gameId].turnCount % 2 == 1) {
                console.log('not yo turn')
              }
              else{
                
                $scope.game[$scope.gameId].ticTacToe[row][column]='X';
                $scope.game[$scope.gameId].turnCount++;
                $scope.game[$scope.gameId].turn="O"
                document.getElementById('x').innerHTML = ($scope.game[$scope.gameId].turn)+'\'S';
                console.log($scope.game[$scope.gameId].turnCount);
              }

           }
           else{
              if($scope.game[$scope.gameId].turnCount % 2 == 1) {
                $scope.game[$scope.gameId].ticTacToe[row][column]='O';
                $scope.game[$scope.gameId].turnCount++;
                $scope.game[$scope.gameId].turn="X"
                document.getElementById('x').innerHTML = ($scope.game[$scope.gameId].turn)+'\'S';
                console.log($scope.game[$scope.gameId].turnCount);                
              }
              else{
                console.log('not yo turn')
                  }

           }


          	// if(turn % 2 == 1) {
    				// 	$scope.game[$scope.gameId].ticTacToe[row][column]='X';
    				// 	document.getElementById('x').innerHTML = p2Name+"'S";
    					
    				// }
    				// else{
    				// 	$scope.game[$scope.gameId].ticTacToe[row][column]='O';
    				// 	document.getElementById('x').innerHTML = p1Name+"'S";
    				// }
  				turn++;
          $scope.check();
  			}
  			else{
  				// alert('Look. This... is all a mistake. I\'m just a compound interest program. I work at a savings and loan! I can\'t play these video game!')
  			}
  		}


  	$scope.check = function(row,column) {
  		// asign a unique value to each unique box name 
  		var a = $scope.game[$scope.gameId].ticTacToe[0][0];
  		var b = $scope.game[$scope.gameId].ticTacToe[0][1];
  		var c = $scope.game[$scope.gameId].ticTacToe[0][2];
  		var d = $scope.game[$scope.gameId].ticTacToe[1][0];
  		var e = $scope.game[$scope.gameId].ticTacToe[1][1];
  		var f = $scope.game[$scope.gameId].ticTacToe[1][2];
  		var g = $scope.game[$scope.gameId].ticTacToe[2][0];
  		var h = $scope.game[$scope.gameId].ticTacToe[2][1];
  		var i = $scope.game[$scope.gameId].ticTacToe[2][2];

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

            document.getElementsByClassName('alertText')[0].innerHTML =" X WINS!!!";
            document.getElementById('x').innerHTML = "";
            document.getElementById('o').innerHTML = "";
            document.getElementsByClassName('alertBox')[0].style.display = "inline";
            $scope.game[$scope.gameId].win=true;

  		  			// NEED TO SET THE RESET CODE     setTimeout("theResetBtn();",3000);
            console.log($scope.game[$scope.gameId].win)

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

            $scope.game[$scope.gameId].win=true;
  					document.getElementsByClassName('alertText')[0].innerHTML =" O WINS!!!";
  			    document.getElementById('x').innerHTML = "";
  		  		document.getElementById('o').innerHTML = "";
  		  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
  		  			// NEED TO SET THE RESET CODE     setTimeout("theResetBtn();",3000);
            console.log($scope.game[$scope.gameId].win)
  			  	}

  		 else{

  		 	if($scope.game[$scope.gameId].turnCount==9){
  		 		
  		 		document.getElementById('x').innerHTML = "";
  	  			document.getElementById('o').innerHTML = "";
  	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
  	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
  	  			// NEED TO SET THE RESET CODE     setTimeout("theResetBtn();",3000);
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
	  		$scope.p1Pick ="O"
	  		$scope.p2Pick ="X"	
    };
	
  });
