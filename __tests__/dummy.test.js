/* eslint-env jest */
'use strict'
// Testing

test('Greet: hello', () => {
  const greet = 'hello'
  const output = 'hello'
  expect(greet).toEqual(output)
})
// describe("first test", () => {
//   test("dummy  test for functionality", () => {

//     const input = [
//       {id: 1, url: "http1"},
//       {id: 2, url: "http2"}
//     ];
//     const output = [{id: 1, url: "http1"}]

//     expect(filterby(input, "link")).toEqual(output)
//   });
// });

// function filterby(inp, st) {
//   const reg = new RegExp(st, "i")
//   return inp.filter((ae) => {
//     return ae.url.match(reg)
//   })
// }

// /* //server dummy test using a temp client! review this test
// //before submitting it
// // test('', () => { //pu name of test in brackets
// //   const ws = require('ws')
// //   const client = new ws('ws://localhost:3000')
// //   client.on('open', () => {
// //     client.send('Hello')
// //   })
// // }) */
