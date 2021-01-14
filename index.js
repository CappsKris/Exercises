let emoji = require('node-emoji');

const emojiArray = emoji.search('flag');

const logEmojis = function(emojis) {
  for (i = 0; i < emojis.length; i++) {
    console.log(emojis[i].emoji);
  }
}

logEmojis(emojiArray);