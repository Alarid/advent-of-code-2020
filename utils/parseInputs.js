const fs = require("fs")

module.exports = function parseInputs(filePath) {
  const content = fs.readFileSync(filePath, "utf-8")
  const lines = content.split(/\r?\n/)
  return lines
}
