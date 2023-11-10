const fs = require('fs');

let message = fs.readFileSync('message.txt', 'utf8');
console.log(message)
const wordsTotal = String(message).split(" ")
let words = []
let wordsCount = []

wordsTotal.forEach((word)=>{
  if (!words.includes(word)){
    words.push(word)
    wordsCount.push(1)
  } else {
    let wordIndex = words.indexOf(word)
    wordsCount[wordIndex]++
  }
})

let result = ""

words.forEach((w,i)=>{
  result+=`${w}${wordsCount[i]}`
})

console.log("------------RESULT--------------")
console.log(result)

