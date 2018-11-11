//The options variable stores the list of the options that the user has with him
options = document.querySelector('.options').children;

var choice; // This variable stores the choice that the user has made
// choice === 1: Rock
// choice === 2: Paper
// choice === 3: Scissors
// choice === 4: Lizard
// choice === 5: Spock

for (var option of options) {
  //the option is the hand that the user has chosen to play
  option.addEventListener('click', function clicked(e) {
    if (e.target.parentNode.className == "option1") {
      console.log('Rock was clicked');
      choice = 1;
    } else if (e.target.parentNode.className == "option2") {
      console.log('Paper was clicked');
      choice = 2;
    } else if (e.target.parentNode.className == "option3") {
      console.log('Scissors was clicked');
      choice = 3;
    } else if (e.target.parentNode.className == "option4") {
      console.log('Lizard was clicked');
      choice = 4;
    } else if (e.target.parentNode.className == "option5") {
      console.log('Spock was clicked');
      choice = 5;
    }
    var shelly = Math.floor(Math.random() * 5) + 1;
    document.querySelector('#shelly').innerHTML = SheldonChooses[shelly];
  });
}

var SheldonChooses = {
  1: '<i class="far fa-hand-rock fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%"></i>',
  2: '<i class="far fa-hand-paper fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%"></i>',
  3: '<i class="far fa-hand-scissors fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%"></i>',
  4: '<i class="far fa-hand-lizard fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%"></i>',
  5: '<i class="far fa-hand-spock fa-3x p-3" style="color:#ffc107; border: 2px solid white; border-radius:50%"></i>'
};