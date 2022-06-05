/* eslint-env jest */
'use strict'
// Testing

test('Greet: hello', () => {
  const greet = 'hello'
  const output = 'hello'
  expect(greet).toEqual(output)
})

//server dummy test using a temp client! review this test
//before submitting it
// test('', () => { //pu name of test in brackets
//   const ws = require('ws')
//   const client = new ws('ws://localhost:3000')
//   client.on('open', () => {
//     client.send('Hello')
//   })
// })