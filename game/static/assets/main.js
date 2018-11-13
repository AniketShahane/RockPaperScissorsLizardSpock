//The options variable stores the list of the options that the user has with him
options = document.querySelector('.options').children;

var yourpoints = 0,
  shellypoints = 0;


you = document.getElementById('yourpoints');
sheldon = document.getElementById('shellypoints');

decider = document.getElementById('decider');

you.innerHTML = '0';
sheldon.innerHTML = '0';


if (screen.width >= 1185) {
  ScrollReveal().reveal('#main-nav', {
    distance: '150%',
    duration: 1000,
    origin: 'top'
  });

  ScrollReveal().reveal('#main-jumbo', {
    distance: '200%',
    duration: 1000,
    origin: 'right'
  });

  ScrollReveal().reveal('#howtoplay', {
    duration: 2000
  });

  ScrollReveal().reveal('#howard_photo', {
    duration: 2000,
    easing: 'ease'
  });

  ScrollReveal().reveal('#sheldon_photo', {
    duration: 2000,
    easing: 'ease'
  });

  ScrollReveal().reveal('.option1', {
    duration: 1200,
    delay: 0,
    distance: '50%',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.option2', {
    duration: 1200,
    delay: 200,
    distance: '50%',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.option3', {
    duration: 1200,
    delay: 400,
    distance: '50%',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.option4', {
    duration: 1200,
    delay: 600,
    distance: '50%',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.option5', {
    duration: 1200,
    delay: 800,
    distance: '50%',
    origin: 'bottom'
  });
}

setTimeout(function() {
  $('#message').fadeOut('slow');
}, 2000);

var choice; // This variable stores the choice that the user has made
// choice === 1: Rock
// choice === 2: Paper
// choice === 3: Scissors
// choice === 4: Lizard
// choice === 5: Spock
var SheldonChooses = {
  1: `<span class="shell" style="display: flex; flex-direction:column;">
      <i class="far fa-hand-rock fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%;"></i>
      <small style="color: white; font-family: 'Oswald', sans-serif; font-size: 1rem;">Rock</small>
    </span>`,
  2: `<span class="shell" style="display: flex; flex-direction:column;">
      <i class="far fa-hand-paper fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%;"></i>
      <small style="color: white; font-family: 'Oswald', sans-serif; font-size: 1rem;">Paper</small>
    </span>`,
  3: `<span class="shell" style="display: flex; flex-direction:column;">
      <i class="far fa-hand-scissors fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%;"></i>
      <small style="color: white; font-family: 'Oswald', sans-serif; font-size: 1rem;">Scissors</small>
    </span>`,
  4: `<span class="shell" style="display: flex; flex-direction:column;">
      <i class="far fa-hand-lizard fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%;"></i>
      <small style="color: white; font-family: 'Oswald', sans-serif; font-size: 1rem;">Lizard</small>
    </span>`,
  5: `<span class="shell" style="display: flex; flex-direction:column;">
      <i class="far fa-hand-spock fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%;"></i>
      <small style="color: white; font-family: 'Oswald', sans-serif; font-size: 1rem;">Spock</small>
    </span>`
};

var winner = [
  [-1, 0, 1, 1, 0],
  [1, -1, 0, 0, 1],
  [0, 1, -1, 1, 0],
  [0, 1, 0, -1, 1],
  [1, 0, 1, 0, -1]
];

var tieString = 'No Winners Here!!';
var rockScissors = 'Rock Crushes Scissors';
var rockLizard = 'Rock Crushes Lizard';
var scissorsPaper = 'Scissors Cut Paper';
var scissorsLizard = 'Scissors Decapitates Lizard';
var paperRock = 'Paper Covers Rock';
var paperSpock = 'Paper Disproves Spock';
var lizardSpock = 'Lizard Poisons Spock';
var lizardPaper = 'Lizard Eats Paper';
var spockRock = 'Spock Vaporises Rock';
var spockScissors = 'Spock Smashes Scissors';


var winnerText = [
  [tieString, paperRock, rockScissors, rockLizard, spockRock],
  [paperRock, tieString, scissorsPaper, lizardPaper, paperSpock],
  [rockScissors, scissorsPaper, tieString, scissorsLizard, spockScissors],
  [rockLizard, lizardPaper, scissorsLizard, tieString, lizardSpock],
  [spockRock, paperSpock, spockScissors, lizardSpock, tieString]
];



for (var option of options) {
  //the option is the hand that the user has chosen to play
  option.addEventListener('click', function clicked(e) {
    if (e.target.parentNode.className == "opt1") {
      // console.log('Rock was clicked');
      choice = 1;
    } else if (e.target.parentNode.className == "opt2") {
      // console.log('Paper was clicked');
      choice = 2;
    } else if (e.target.parentNode.className == "opt3") {
      // console.log('Scissors was clicked');
      choice = 3;
    } else if (e.target.parentNode.className == "opt4") {
      // console.log('Lizard was clicked');
      choice = 4;
    } else if (e.target.parentNode.className == "opt5") {
      // console.log('Spock was clicked');
      choice = 5;
    }
    var shelly = Math.floor(Math.random() * 5) + 1;
    document.querySelector('#shelly').innerHTML = SheldonChooses[shelly];

    console.log("Working till this point");
    if (winner[choice - 1][shelly - 1] === 1) {
      yourpoints += 1;
      // $('#decider').fadeIn(100);
      decider.innerHTML = '<em>You Win!!</em>';
      document.getElementById('decider-text').innerHTML = winnerText[choice - 1][shelly - 1];
      document.getElementById('decideWinner').click();
      you.innerHTML = `${yourpoints}`;
      setTimeout(function() {
        $('#deciderModal').fadeOut('slow');
        $('#deciderModal').modal('hide');
      }, 1350);
      // $('#deciderModal').fadeOut(1200);
      // sync();
    } else if (winner[choice - 1][shelly - 1] === -1) {
      // $('#decider').fadeIn(100);
      decider.innerHTML = '<em>Sorry Guys Its a Tie!!</em>';
      document.getElementById('decider-text').innerHTML = winnerText[choice - 1][shelly - 1];
      document.querySelector('#decideWinner').click();
      setTimeout(function() {
        $('#deciderModal').fadeOut('slow');
        $('#deciderModal').modal('hide');
      }, 1350);
      // sync();
    } else {
      shellypoints += 1;
      // $('#decider').fadeIn(100);
      decider.innerHTML = '<em>Sheldon Wins!!</em>';
      document.getElementById('decider-text').innerHTML = winnerText[choice - 1][shelly - 1];
      document.querySelector('#decideWinner').click();
      sheldon.innerHTML = `${shellypoints}`;
      setTimeout(function() {
        $('#deciderModal').fadeOut('slow');
        $('#deciderModal').modal('hide');
      }, 1350);
      // sync();
    }

  });
}

function reset() {
  document.querySelector('#shelly').innerHTML = '';
}

function sync() {
  ScrollReveal().sync();
}