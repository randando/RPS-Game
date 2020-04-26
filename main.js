var img;
function pick(choice) {
  var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice==0){
    img = "img/paper.png";
  }else if(computerChoice==1){
    img = "img/rock1.0.png";
  }else{
    img = "img/scissors.jpg";
  }
  // 0:paper | 1:rock | 2:scissors
  var status;
  if (choice == 'paper') {
    if (computerChoice == 1) {
      status = 'win';
    } else if (computerChoice == 2) {
      status = 'loss';
    } else {
      status = 'tie';
    }
  } else if (choice == 'rock') {
    if (computerChoice == 2) {
      status = 'win';
    } else if (computerChoice == 0) {
      status = 'loss';
    } else {
      status = 'tie';
    }
  } else {
    if (computerChoice == 0) {
      status = 'win';
    } else if (computerChoice == 1) {
      status = 'loss';
    } else {
      status = 'tie';
    }
  }
  var image = document.getElementById("imageid").src=img;  
  document.getElementById("displayText").innerHTML = status.toUpperCase();
}
