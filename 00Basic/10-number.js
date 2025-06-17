/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 숫자                           */
/* -------------------------------------------------------------------------- */
// toFixed
// const number = 0.12545;
// console. log(number.toFixed(2));
// console.log(typeof parseFloat(number.toFixed(2)))

// toLocaleSting
// const number = 123123123;
// console. log(number.toLocaleString());
// console. log(*${number.toLocaleString()}₴*);

// Number.isInteger
// const number = 100.654;
// console. log(Number. isInteger (number));

// parseInt)
// const number = 2.82123;
// const string = "2.82123";
// console. log(parseInt(number)) ;
// console. log(typeof parseInt(string));

// parseFloat
const number = 23.12323;
const string = "23.12323";
const compare = "12312.123123AAAA";
// console. log (parseFloat (number));
// console. log(typeof parseFloat(string));
console.log(Number(compare));
console.log(parseFloat(compare));
