function pick(choice) {
  var computerChoice = Math.floor(Math.random() * 3);
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
}

// Work on logic later
// function compare(user, cpu){
//   if(user=='paper' && (cpu=='paper' || cpu=='rock')){
//     cpu = false;
//   }else if(user=='rock' && (cpu=='rock' || cpu=='scissors')){
//     cpu = false;
//   }else if(user=='scissors' && (cpu=='scissors' || cpu=='paper')){
//     cpu = false;
//   }else{
//     user = false;
//     cpu = true;
//   }
// }
