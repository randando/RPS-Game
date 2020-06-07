var plrScore = 0;
var cpuScore = 0;
var pointsToWin = 2;

function pick(choice) {
  var img;
  //Random CPU pick
  var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==0){
    img = "paper.png";
  }else if(computerChoice==1){
    img = "rock.png";
  }else{
    img = "scissors.jpg";
  }
  // 0:paper | 1:rock | 2:scissors
  var status;
  if(!img.startsWith(choice)){
    if (choice == 'paper') {
      (computerChoice == 1) ? plrScore++ : cpuScore++;
    }else if (choice == 'rock') {
      (computerChoice == 2) ? plrScore++ : cpuScore++;
    }else{
      (computerChoice == 0) ? plrScore++ : cpuScore++;
    }
  }
  document.getElementById("imageid").src="img/"+img;
  document.getElementById("plrScore").innerHTML = plrScore;
  document.getElementById("cpuScore").innerHTML = cpuScore;
  //Check for victory/loss
  if(plrScore == pointsToWin){
    alert("Congratulations! You win the battle");
  }else if(cpuScore == pointsToWin){
    alert("You lost!");
  }
}
