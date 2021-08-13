const parseInputs = require("../utils/parseInputs")

// Find two lines that sum
const lines = parseInputs("../day1/input.txt")
let results = []
lines.find((num1) =>
  lines.find((num2) => {
    if (parseInt(num1) + parseInt(num2) === 2020) {
      results = [num1, num2]
      return true
    }
  })
)

const result = results.map(Number).reduce((acc, num) => acc * num, 1)
console.log(result)
