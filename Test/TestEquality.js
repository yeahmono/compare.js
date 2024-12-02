import { typeOf } from '../compare.js'

console.log('Value Types')
console.log(`${typeOf(1)} Real: ${1 === 1}`) // Number Real: true
console.log(`${typeOf(NaN)} NaN: ${NaN === NaN}`) // Number NaN: false
console.log(`${typeOf(true)}: ${true === true}`) // Boolean: true
console.log(`${typeOf(undefined)}: ${undefined === undefined}`) // Undefined: true
console.log(`${typeOf('')}: ${'' === ''}`) // String: true
console.log(`${typeOf(1n)}: ${1n === 1n}`) // BigInt: true
console.log()

console.log('Reference Types')
console.log(`${typeOf(Symbol())}: ${Symbol() === Symbol()}`) // Symbol: false
console.log(`${typeOf(null)}: ${null === null}`) // Null: true
console.log(`${typeOf({})}: ${({}) === ({})}`) // Object: false
console.log(`${typeOf([])}: ${([]) === ([])}`) // Array: false
console.log(`${typeOf(() => { })}: ${(() => { }) === (() => { })}`) // Function: false
console.log(`${typeOf(new Map)}: ${new Map === new Map}`) // Map: false
