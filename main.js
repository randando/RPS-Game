var plrScore = 0;
var cpuScore = 0;
var pointsToWin = 10;
var status = "";
var result;

const pick = (choice) =>{
  let img;
  //Random CPU pick
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==0){
    img = "paper.png";
  }else if(computerChoice==1){
    img = "rock.png";
  }else{
    img = "scissors.jpg";
  }
  // 0:paper | 1:rock | 2:scissors
  if(!img.startsWith(choice)){
    if (choice == 'paper') {
      (computerChoice == 1) ? win() : loss();
    }else if (choice == 'rock') {
      (computerChoice == 2) ? win() : loss();
    }else{
      (computerChoice == 0) ? win() : loss();
    }
  }else{
    status = "Tie";
  }
  document.getElementById("imageid").src="img/"+img;
  document.getElementById("plrScore").innerHTML = plrScore;
  document.getElementById("cpuScore").innerHTML = cpuScore;
  document.getElementById("result").innerHTML = status;
  checkIfDone();
}

const checkIfDone = () =>{
  if(plrScore == pointsToWin || cpuScore == pointsToWin ){
    result = (plrScore > cpuScore) ? "Congratulations, you win the game!" : "You lose the game!";
    document.getElementById("status").innerHTML = result;
    $("#myModal").modal();
      if(plrScore > cpuScore){
        document.getElementById("reset").style.display = "none";
      }else{
        countdown(9);
      }
  }
}

const resetGame = () =>{
  plrScore = 0;
  cpuScore = 0;
  status = "Ready, shoot!";
  document.getElementById("plrScore").innerHTML = plrScore;
  document.getElementById("cpuScore").innerHTML = cpuScore;
  document.getElementById("result").innerHTML = status;
  $("#myModal").modal('toggle');
}

const countdown = (start) =>{
  document.getElementById("time").innerHTML = start;
  setInterval( () =>{
    if(start >= 0){
      document.getElementById("time").innerHTML = start;
      start--;
    }
  },1000);
}

const win = () =>{
  plrScore++;
  status = "Win";
}

const loss = () =>{
  cpuScore++;
  status = "Loss";
}
