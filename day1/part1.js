const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "./", "input.txt")
const content = fs.readFileSync(filePath, "utf-8")
const lines = content.split(/\r?\n/)

let result
lines.every((line) => {
  const currentNumber = parseInt(line)
  const res = lines.find((number) => currentNumber + parseInt(number) === 2020)
  if (res) {
    result = currentNumber * parseInt(res)
    return false
  }
  return true
})

console.log(result)
