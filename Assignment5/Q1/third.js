const fs = require('fs');

fs.appendFile('first.txt', 'First line added!', 'utf-8', err => {
  if (err) {
    throw err;
  }
  console.log('First line written.',fs.readFileSync("first.txt","utf8"));
  fs.appendFile('second.txt', 'Second line appended.', err => {
    if (err) {
      throw err;
    }

    console.log('Second line appended.',fs.readFileSync("second.txt","utf8"));
  });
});