import { readFileSync } from "node:fs";

let lines  = readFileSync('encryption_policies.txt', 'utf-8',).split("\n").map((line)=>line.replace("\r",""));

let invalidLines = []
let count = 0

for (const line of lines){
    let [range,character,text] = line.replace(":","").split(" ")
    const [min,max] = range.split("-")
    const characters = text.split("")
    const charsFiltered = characters.filter((c)=>c===character)
    if (charsFiltered.length > max || charsFiltered.length < min){
        count++
        invalidLines.push(text)
        console.log(`${count}) ${text}`)
    }
}