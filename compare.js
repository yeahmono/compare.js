import UglifyJS from 'uglify-js'

export const typeOf = a => {
    return Object.prototype.toString.call(a).slice(8, -1)
}

export const compare = (a, b) => {
    if (typeOf(a) != typeOf(b)) { // compare type
        return false
    }
    if (a == b) { // compare value
        return true // case real Number, Boolean, Null, Undefined, String, BigInt, Null or same reference
    }
    if (a.compare) {
        return a.compare(b)
    }

    switch (typeOf(a)) { // deep compare
        case 'Number':
            if (isNaN(a) && isNaN(b)) {// both NaN
                return true
            }
            return false // either NaN or not equal

        case 'Date':
            return a.getTime() == b.getTime() // to Number

        case 'Array':
            if (a.length != b.length) { // compare length
                return false
            }
            if (!a.length) { // both empty
                return true
            }
            for (let i = 0; i < a.length; ++i) {
                if (!compare(a[i], b[i])) {
                    return false
                }
            }
            return true

        case 'Object':
            if (Reflect.ownKeys(a).length != Reflect.ownKeys(b).length) { // compare length
                return false
            }
            if (!Reflect.ownKeys(a).length) { // both empty
                return true
            }

            for (let key of Reflect.ownKeys(a)) { // compare keys
                if (!Reflect.has(b, key)) {
                    return false // no key in b
                }
            }
            for (let key of Reflect.ownKeys(b)) {
                if (!Reflect.has(a, key)) {
                    return false // no key in a
                }
            }

            for (let key of Reflect.ownKeys(a)) { // compare values
                if (!compare(a[key], b[key])) {
                    return false
                }
            }
            return true

        case 'Function':
            return UglifyJS.minify('let a = ' + a.toString()).code == UglifyJS.minify('let a = ' + b.toString()).code

        case 'Map':
            return compare(Object.fromEntries(a), Object.fromEntries(b))
        case 'Set':
            return compare(Array.from(a), Array.from(b))

        default:
            return false
    }
}
