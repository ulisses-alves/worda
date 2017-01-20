const path = require('path')
const {readFileSync} = require('fs')

main(process.argv)

function main (args) {
  const filename = path.resolve(args[2])
  const data = parseCSV(filename)
  console.log(JSON.stringify(data))
}

function parseCSV (filename) {
  const content = readFileSync(filename, {encoding: 'utf8'})
  const matrix = parseMatrix(content)

  return buildArray(matrix)
}

function buildArray (matrix) {
  const headers = matrix[0]
  const body = matrix.slice(1)

  return body.map(row => headers.reduce(
    (json, header, index) => Object.assign({}, json, {
      [header]: row[index]
    }),
    {}
  ))
}

function parseMatrix (content) {
  return content.split('\r\n').map(line => line.split(','))
}
