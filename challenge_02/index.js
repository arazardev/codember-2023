import { readFileSync } from 'fs';

let message = readFileSync('message_02.txt', 'utf8');

function operate({operator,value}){
    if (operator ==="#"){
        return value+1
    }
    if (operator ==="@"){
        return value-1
    }
    if (operator ==="*"){
        return value*value
    }
}

let result = ""
let count = 0

for (const c of message){
    if (c === "&"){
        result += count
    } else {
        count = operate({operator:c,value:count})
    }
}

console.log(result)