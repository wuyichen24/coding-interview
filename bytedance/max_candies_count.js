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
 * Complete the 'maxCandiesCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candies as parameter.
 */

function maxCandiesCount(candies) {
    // Write your code here
    
    console.log(candies);
    
    let i= 0;
    let j = candies.length - 1;
    let leftSum = 0;
    let rightSum = 0;
    let answer = 0;
    let changedI = true;
    let changedJ = true;
    
    while(i < j){
        
        if(changedI){
        leftSum += candies[i];
        changedI = false;
        }
        if(changedJ){
        rightSum += candies[j];
        changedJ = false;
        }
        if(leftSum == rightSum){
            answer = i + 1 + (candies.length - j);
            i++;
            j--;
            changedJ = true;
            changedI = true;
        }
        else if(leftSum > rightSum){
            j--;
            changedJ = true;
        }else{
            i++;
            changedI = true;
        }
    }
    
    return answer;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candiesCount = parseInt(readLine().trim(), 10);

    let candies = [];

    for (let i = 0; i < candiesCount; i++) {
        const candiesItem = parseInt(readLine().trim(), 10);
        candies.push(candiesItem);
    }

    const result = maxCandiesCount(candies);

    ws.write(result + '\n');

    ws.end();
}
