// ask and assign player name
  let playername = prompt('Welcome to Bear, Hunter, Ninja! Please enter your name to get started: ');

// assign confirmation message of player's name to variable with escaped single quote
  let playernameconf = `Hi ${playername}! Let\'s play!!`;

// show player name confirmation message
  alert(playernameconf);

// ask and assign player type
  let playertype = prompt('Who are you: Bear, Ninja, or Hunter?');

// hard assign Bear to computer's player type
  let computertype = "Bear";

// store confirmation messages to variables used below in html and in console
  let playertypeconf = `${playername}, you picked ${playertype}!`;
  let computertypeconf = `The computer chose ${computertype}!`;

// assign variable named combination to 0 (will change based on logic below)
  let combination = 0;

// if else statements - !!!!! CASE SENSITIVE !!!!
// most are not used due to hard coding of bear for computer
  if (playertype == "Bear" && computertype == "Bear") {
    combination = 1;
  }

  else if (playertype == "Ninja" && computertype == "Ninja") {
    combination = 2;
  }

  else if (playertype == "Hunter" && computertype == "Hunter") {
    combination = 3;
  }

  else if (playertype == "Bear" && computertype == "Ninja") {
    combination = 4;
  }

  else if (playertype == "Ninja" && computertype == "Hunter") {
    combination = 5;
  }

  else if (playertype == "Hunter" && computertype == "Bear") {
    combination = 6;
  }

  else if (playertype == "Hunter" && computertype == "Ninja") {
    combination = 7;
  }

  else if (playertype == "Bear" && computertype == "Hunter") {
    combination = 8;
  }

  else if (playertype == "Ninja" && computertype == "Bear") {
    combination = 9;
  }

  else {
    combination = 0; // default value - user entered something other than bear, ninja, or hunter
  }

// create and assign final resulting message
  let result = 'Computer won, you lost!' // default message - accounts for user inputs other than bear, ninja, hunter

// switch logic
// fun fact, if you mispell switch it will not linter it but will linter code inside the the brackets
  switch (combination) {
  case 1:
  result = 'It was a tie!';
  break;

  case 2:
  result = 'It was a tie!';
  break;

  case 3:
  result = 'It was a tie!';
  break;

  case 4:
  result = 'You won, computer lost!';
  break;

  case 5:
  result = 'You won, computer lost!';
  break;

  case 6:
  result = 'You won, computer lost!';
  break;

  case 7:
  result = 'You lost, computer won!';
  break;

  case 8:
  result = 'You lost, computer won!';
  break;

  case 9:
  result = 'You lost, computer won!';
  break;

  // default case accounts for case 0 aka combination = 0
  // they entered something other than allowed including lower case of bear, ninja, or hunter
  default:
    result = 'Computer won, you lost!'; 
    break;
  }

// log results
  console.log(playertypeconf); // log user player type
  console.log(computertypeconf); // log computer player type
  console.log(result); // log winner/loser results