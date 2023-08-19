'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'exchange_cups' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY labels as parameter.
 */



function exchange_cups(labels) {
    // Write your code here
 let counter = 0;

  for (let i = 0; i < labels.length - 1; i++) {
    let min = i;

    for (let j = i; j < labels.length; j++) {
      if (labels[min] > labels[j]) {
        min = j;
      }
    }

    // swap
    if (i !== min) {
      let tmp = labels[i];
      labels[i] = labels[min];
      labels[min] = tmp;
      counter++;
    }
  }

  return counter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const labelsCount = parseInt(readLine().trim(), 10);

    let labels = [];

    for (let i = 0; i < labelsCount; i++) {
        const labelsItem = parseInt(readLine().trim(), 10);
        labels.push(labelsItem);
    }

    const result = exchange_cups(labels);

    ws.write(result + '\n');

    ws.end();
}
