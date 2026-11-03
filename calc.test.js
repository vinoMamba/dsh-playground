const { sum } = require('./calc')

if (sum(2, 3) !== 5) {
  console.error('sum(2, 3) should be 5, got', sum(2, 3))
  process.exit(1)
}
console.log('ok')
