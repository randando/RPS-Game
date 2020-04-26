function pick(choice) {
  var img;
  //Random CPU pick
  var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==0){
    img = "paper.png";
  }else if(computerChoice==1){
    img = "rock1.0.png";
  }else{
    img = "scissors.jpg";
  }
  // 0:paper | 1:rock | 2:scissors
  var status;
  if(img.startsWith(choice)){
    status = 'tie';
  }else{
    if (choice == 'paper') {
      if (computerChoice == 1) {
        status = 'win';
      } else{
        status = 'loss';
      }
    }else if (choice == 'rock') {
      if (computerChoice == 2) {
        status = 'win';
      }else{
        status = 'loss';
      }
    }else{
      if (computerChoice == 0) {
        status = 'win';
      } else{
        status = 'loss';
      }
    }
  }
  document.getElementById("imageid").src="img/"+img;
  document.getElementById("displayText").innerHTML = status.toUpperCase();
}
