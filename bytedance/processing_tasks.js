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
 * Complete the 'processing_tasks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY tasks as parameter.
 */

function processing_tasks(tasks) {
    // Write your code here
    const map = new Map();
    const taskHas = new Map();
    const taskFinihsed =  new Map();
    for(let i=0;i<tasks.length;i++){
        taskHas.set(i , tasks[i][2]);
        taskFinihsed.set(i , 0);
        let start = tasks[i][0];
        let end = tasks[i][1];
        for(let j=start;j<=end;j++){
            let alreadyExist = map.get(j) || [];
            alreadyExist.push(i);
            map.set(j, alreadyExist);
        }
    }
    
    
    let allObj = [];
    for(const [key, value] of map){
        allObj.push({key , value});
    }
    
  
    let ans = 0;
    while(!allDone(taskHas)){
        let indexPick = checkHighestRemaining(allObj, taskHas);
        let value = allObj[indexPick].value;
        ans++;
        for(let j=0;j<value.length;j++){
            let oldHas = taskHas.get(value[j]);
            oldHas--;
            taskHas.set(value[j], oldHas);
            
        }
    }
    
    return ans;
    
    

}

function checkHighestRemaining(allObj, taskHas){
    let previousMax = Number.MIN_VALUE;
    let res = -1;
    for(let i=0;i<allObj.length;i++){
        let value = allObj[i].value;
        let count = 0;
        for(let j=0;j<value.length;j++){
            if(taskHas.get(value[j]) > 0){
                count++;
            }
        }
        if(count > previousMax){
            previousMax = count;
            res = i;
        }
    }
    return res;
}

function allDone(map){
    for(const [key , value] of map){
        if(value > 0){
            return false;
        }
    }
    return true;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tasksRows = parseInt(readLine().trim(), 10);

    const tasksColumns = parseInt(readLine().trim(), 10);

    let tasks = Array(tasksRows);

    for (let i = 0; i < tasksRows; i++) {
        tasks[i] = readLine().replace(/\s+$/g, '').split(' ').map(tasksTemp => parseInt(tasksTemp, 10));
    }

    const result = processing_tasks(tasks);

    ws.write(result + '\n');

    ws.end();
}
