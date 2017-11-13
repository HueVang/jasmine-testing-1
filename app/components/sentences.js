// This is where all of our word/sentence logic will be stored

function greet(name){
  return 'Hello ' + name + '!';
};

function praise(name){
  return 'You are really helpful ' + name + '.';
};

function scold(name){
  return 'No ' + name + '! Don\'t touch that!';
};

function fight(name){
  return 'It\'s ' + name + ' versus Google!';
};

module.exports = {
  greet: greet,
  praise: praise,
  scold: scold,
  fight: fight
}
