const comments = {
  '123': [
      'Did you ever hear the tragedy of Darth Plagueis the wise?',
  ],
  '321': [
    'I dont like sand. Its all coarse, and rough, and irritating. And it gets everywhere.',
    'One day, I will become the greatest Jedi EVER. I will even learn how to stop people from dying.',
    'I’ve got a bad feeling about this.',
  ],
  '414': [
  ]
}

const yodaquotes = [
  'The greatest teacher, failure is.',
  'Do or do not. There is no try',
  'Fear is a path to the Dark Side',
  'Size matters not.',
  'You must unlearn what you have learned',
  'Mind what you have learned. Save you it can',
  'When nine hundred years old you reach, look as good you will not',
  'Named must your fear be before banish it you can',
  'Truly wonderful the mind of a child is.',
  'You will know good from bad when at peace and passive you are'
];

let atyoda = 0;
function addYodaQuote() {
  comments['414'].push(yodaquotes[atyoda++]);
  if (atyoda < yodaquotes.length) {
    setTimeout(addYodaQuote, Math.floor(Math.random() * 25000) + 1000);
  }
}

addYodaQuote()

module.exports = {
  list: function list(id) {
    return comments[id];
  },
  add: function add(id, comment) {
    comments[id].push(comment);
  }
}