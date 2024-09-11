const fs = require('fs');

// Read file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Write file
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been written');
});
