import { typeOf, compare } from '../compare.js'

console.log('Value Types')
console.log(`${typeOf(1)} Real: ${compare(1, 1)}`) // Number Real: true
console.log(`${typeOf(NaN)} NaN: ${compare(NaN, NaN)}`) // Number NaN: true
console.log(`${typeOf(true)}: ${compare(true, true)}`) // Boolean: true
console.log(`${typeOf(undefined)}: ${compare(undefined, undefined)}`) // Undefined: true
console.log(`${typeOf('')}: ${compare('', '')}`) // String: true
console.log(`${typeOf(1n)}: ${compare(1n, 1n)}`) // BigInt: true
console.log()
console.log(`${typeOf(1)} Real: ${compare(1, 2)}`) // Number Real: false
console.log(`${typeOf(NaN)} NaN: ${compare(NaN, 0)}`) // Number NaN: false
console.log(`${typeOf(true)}: ${compare(true, false)}`) // Boolean: false
console.log(`${typeOf('')}: ${compare('', '1')}`) // String: false
console.log(`${typeOf(1n)}: ${compare(1n, 2n)}`) // BigInt: false
console.log('\n')

console.log('Reference Types')
const symbolA = Symbol()
const symbolB = symbolA
console.log(`${typeOf(symbolA)}: ${compare(symbolA, symbolB)}`) // Symbol: true
console.log(`${typeOf(null)}: ${compare(null, null)}`) // Null: true
console.log(`${typeOf({})}: ${compare({ a: 1, b: 2 }, { b: 2, a: 1 })}`) // Object: true
console.log(`${typeOf([])}: ${compare([symbolA], [symbolA])}`) // Array: true
console.log(`${typeOf(() => { })}: ${compare((a => a), (b => b))}`) // Function: true
console.log(`${typeOf(new Map)}: ${compare(new Map, new Map)}`) // Map: true
console.log()
console.log(`${typeOf(Symbol())}: ${compare(Symbol(), Symbol())}`) // Symbol: false
console.log(`${typeOf(null)}: ${compare(null, {})}`) // Null: false
console.log(`${typeOf({})}: ${compare({ [symbolA]: 1 }, { a: 1 })}`) // Object: false
console.log(`${typeOf([])}: ${compare([1, 2], [2, 1])}`) // Array: false
console.log(`${typeOf(() => { })}: ${compare((a => a), (a => a + 1))}`) // Function: false
console.log(`${typeOf(new Map)}: ${compare(new Map, (new Map).set(1, 1))}`) // Map: false
