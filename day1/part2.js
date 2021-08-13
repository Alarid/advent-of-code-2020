const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "./", "input.txt")
const content = fs.readFileSync(filePath, "utf-8")
const lines = content.split(/\r?\n/)

// Find three lines that sum up to 2020
let results = []
lines.find((num1) =>
  lines.find((num2) =>
    lines.find((num3) => {
      if (parseInt(num1) + parseInt(num2) + parseInt(num3) === 2020) {
        results = [num1, num2, num3]
        return true
      }
    })
  )
)

const result = results.map(Number).reduce((acc, num) => acc * num, 1)
console.log(result)
