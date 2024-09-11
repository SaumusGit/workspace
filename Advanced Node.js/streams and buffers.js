const fs = require('fs');
const readline = require('readline');

const filePath = process.argv[2];
const wordToCount = process.argv[3];
let wordCount = 0;

const stream = fs.createReadStream(filePath);
const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    const words = line.split(/\s+/);
    words.forEach((word) => {
        if (word === wordToCount) wordCount++;
    });
});

rl.on('close', () => {
    console.log(`The word "${wordToCount}" occurs ${wordCount} times.`);
});
