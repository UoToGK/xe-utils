const XEUtils = require('../index')

describe('Base functions', () => {
  test('isNaN()', () => {
    expect(
      XEUtils.isNaN(0)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(null)
    ).toEqual(false)
    expect(
      XEUtils.isNaN('')
    ).toEqual(false)
    expect(
      XEUtils.isNaN([])
    ).toEqual(false)
    expect(
      XEUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(true)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(false)
    ).toEqual(false)
    expect(
      XEUtils.isNaN(undefined)
    ).toEqual(true)
    expect(
      XEUtils.isNaN({})
    ).toEqual(true)
    expect(
      XEUtils.isNaN('null')
    ).toEqual(true)
    expect(
      XEUtils.isNaN('NAN')
    ).toEqual(true)
    expect(
      XEUtils.isNaN(/\d/)
    ).toEqual(true)
    expect(
      XEUtils.isNaN(function () {})
    ).toEqual(true)
  })

  test('isFinite()', () => {
    expect(
      XEUtils.isFinite(NaN)
    ).toEqual(false)
    expect(
      XEUtils.isFinite({})
    ).toEqual(false)
    expect(
      XEUtils.isFinite(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isFinite(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isFinite('num')
    ).toEqual(false)
    expect(
      XEUtils.isFinite(-2)
    ).toEqual(true)
    expect(
      XEUtils.isFinite(0)
    ).toEqual(true)
    expect(
      XEUtils.isFinite([])
    ).toEqual(true)
    expect(
      XEUtils.isFinite('5')
    ).toEqual(true)
    expect(
      XEUtils.isFinite(2e64)
    ).toEqual(true)
  })

  test('isUndefined()', () => {
    expect(
      XEUtils.isUndefined(0)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(-2)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(false)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('')
    ).toEqual(false)
    expect(
      XEUtils.isUndefined({})
    ).toEqual(false)
    expect(
      XEUtils.isUndefined([])
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(null)
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('null')
    ).toEqual(false)
    expect(
      XEUtils.isUndefined('undefined')
    ).toEqual(false)
    expect(
      XEUtils.isUndefined(undefined)
    ).toEqual(true)
    expect(
      XEUtils.isUndefined()
    ).toEqual(true)
  })

  test('isArray()', () => {
    let method = function () {
      expect(
        XEUtils.isArray(arguments)
      ).toEqual(false)
    }
    method()
    method(11, 22)
    expect(
      XEUtils.isArray(null)
    ).toEqual(false)
    expect(
      XEUtils.isArray(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isArray({})
    ).toEqual(false)
    expect(
      XEUtils.isArray(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isArray(0)
    ).toEqual(false)
    expect(
      XEUtils.isArray(-2)
    ).toEqual(false)
    expect(
      XEUtils.isArray(false)
    ).toEqual(false)
    expect(
      XEUtils.isArray('false')
    ).toEqual(false)
    expect(
      XEUtils.isArray([])
    ).toEqual(true)
    expect(
      XEUtils.isArray([1, 2, 3])
    ).toEqual(true)
  })

  test('isFloat()', () => {
    expect(
      XEUtils.isFloat(null)
    ).toEqual(false)
    expect(
      XEUtils.isFloat('null')
    ).toEqual(false)
    expect(
      XEUtils.isFloat({})
    ).toEqual(false)
    expect(
      XEUtils.isFloat([])
    ).toEqual(false)
    expect(
      XEUtils.isFloat(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isFloat(/1\.3/)
    ).toEqual(false)
    expect(
      XEUtils.isFloat(0)
    ).toEqual(false)
    expect(
      XEUtils.isFloat(3)
    ).toEqual(false)
    expect(
      XEUtils.isFloat(-1)
    ).toEqual(false)
    expect(
      XEUtils.isFloat('3.9a')
    ).toEqual(false)
    expect(
      XEUtils.isFloat('1.3')
    ).toEqual(true)
    expect(
      XEUtils.isFloat(3.3)
    ).toEqual(true)
    expect(
      XEUtils.isFloat(-2.3)
    ).toEqual(true)
  })

  test('isInteger()', () => {
    expect(
      XEUtils.isInteger(null)
    ).toEqual(false)
    expect(
      XEUtils.isInteger([])
    ).toEqual(false)
    expect(
      XEUtils.isInteger({})
    ).toEqual(false)
    expect(
      XEUtils.isInteger(/123/)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(null)
    ).toEqual(false)
    expect(
      XEUtils.isInteger('null')
    ).toEqual(false)
    expect(
      XEUtils.isInteger('undefined')
    ).toEqual(false)
    expect(
      XEUtils.isInteger(3.3)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(-1.3)
    ).toEqual(false)
    expect(
      XEUtils.isInteger(2)
    ).toEqual(true)
    expect(
      XEUtils.isInteger(-1)
    ).toEqual(true)
    expect(
      XEUtils.isInteger(0)
    ).toEqual(true)
  })

  test('isFunction()', () => {
    expect(
      XEUtils.isFunction('null')
    ).toEqual(false)
    expect(
      XEUtils.isFunction(null)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(false)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(0)
    ).toEqual(false)
    expect(
      XEUtils.isFunction(-1)
    ).toEqual(false)
    expect(
      XEUtils.isFunction([])
    ).toEqual(false)
    expect(
      XEUtils.isFunction({})
    ).toEqual(false)
    expect(
      XEUtils.isFunction(function () {})
    ).toEqual(true)
  })

  test('isBoolean()', () => {
    expect(
      XEUtils.isBoolean([])
    ).toEqual(false)
    expect(
      XEUtils.isBoolean({})
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(null)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean('false')
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(0)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(-1)
    ).toEqual(false)
    expect(
      XEUtils.isBoolean(true)
    ).toEqual(true)
  })

  test('isString()', () => {
    expect(
      XEUtils.isString(1)
    ).toEqual(false)
    expect(
      XEUtils.isString(0)
    ).toEqual(false)
    expect(
      XEUtils.isString(null)
    ).toEqual(false)
    expect(
      XEUtils.isString(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isString({})
    ).toEqual(false)
    expect(
      XEUtils.isString([])
    ).toEqual(false)
    expect(
      XEUtils.isString(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isString(function () {})
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isString(Symbol('abc'))
      ).toEqual(false)
    }
    expect(
      XEUtils.isString(true)
    ).toEqual(false)
    expect(
      XEUtils.isString('')
    ).toEqual(true)
    expect(
      XEUtils.isString('abc')
    ).toEqual(true)
  })

  test('isNumber()', () => {
    expect(
      XEUtils.isNumber(null)
    ).toEqual(false)
    expect(
      XEUtils.isNumber(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isNumber({})
    ).toEqual(false)
    expect(
      XEUtils.isNumber([])
    ).toEqual(false)
    expect(
      XEUtils.isNumber(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isNumber(/123/)
    ).toEqual(false)
    expect(
      XEUtils.isNumber('1')
    ).toEqual(false)
    expect(
      XEUtils.isNumber(-1)
    ).toEqual(true)
    expect(
      XEUtils.isNumber(0)
    ).toEqual(true)
    expect(
      XEUtils.isNumber(9.3)
    ).toEqual(true)
  })

  test('isRegExp()', () => {
    expect(
      XEUtils.isRegExp(null)
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isRegExp([])
    ).toEqual(false)
    expect(
      XEUtils.isRegExp({})
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(-1)
    ).toEqual(false)
    expect(
      XEUtils.isRegExp('a')
    ).toEqual(false)
    expect(
      XEUtils.isRegExp(new RegExp('a'))
    ).toEqual(true)
    expect(
      XEUtils.isRegExp(/\d/)
    ).toEqual(true)
  })

  test('isObject()', () => {
    expect(
      XEUtils.isObject(123)
    ).toEqual(false)
    expect(
      XEUtils.isObject(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isObject('null')
    ).toEqual(false)
    expect(
      XEUtils.isObject(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isObject(-1)
    ).toEqual(false)
    expect(
      XEUtils.isObject(false)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      XEUtils.isObject(/\d/)
    ).toEqual(true)
    expect(
      XEUtils.isObject(null)
    ).toEqual(true)
    expect(
      XEUtils.isObject([])
    ).toEqual(true)
    expect(
      XEUtils.isObject({})
    ).toEqual(true)
  })

  test('isPlainObject()', () => {
    expect(
      XEUtils.isPlainObject(null)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(/\d/)
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject([])
    ).toEqual(false)
    expect(
      XEUtils.isPlainObject(123)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isPlainObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      XEUtils.isPlainObject({})
    ).toEqual(true)
  })

  test('isDate()', () => {
    expect(
      XEUtils.isDate('2017-12-20')
    ).toEqual(false)
    expect(
      XEUtils.isDate('ue Dec 04 2018 15:02:06 GMT+0800')
    ).toEqual(false)
    expect(
      XEUtils.isDate(-1)
    ).toEqual(false)
    expect(
      XEUtils.isDate(0)
    ).toEqual(false)
    expect(
      XEUtils.isDate(null)
    ).toEqual(false)
    expect(
      XEUtils.isDate(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isDate([])
    ).toEqual(false)
    expect(
      XEUtils.isDate({})
    ).toEqual(false)
    expect(
      XEUtils.isDate(1514096716800)
    ).toEqual(false)
    expect(
      XEUtils.isDate(new Date())
    ).toEqual(true)
  })

  test('isError()', () => {
    expect(
      XEUtils.isError(null)
    ).toEqual(false)
    expect(
      XEUtils.isError({})
    ).toEqual(false)
    expect(
      XEUtils.isError(new Error('error'))
    ).toEqual(true)
  })

  test('isTypeError()', () => {
    expect(
      XEUtils.isTypeError(null)
    ).toEqual(false)
    expect(
      XEUtils.isTypeError({})
    ).toEqual(false)
    expect(
      XEUtils.isTypeError(new TypeError('error'))
    ).toEqual(true)
  })

  test('isEmpty()', () => {
    expect(
      XEUtils.isEmpty([11])
    ).toEqual(false)
    expect(
      XEUtils.isEmpty({ a: 1 })
    ).toEqual(false)
    expect(
      XEUtils.isEmpty()
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(0)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(-1)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty('')
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(false)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(null)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty({})
    ).toEqual(true)
    expect(
      XEUtils.isEmpty([])
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(/\d/)
    ).toEqual(true)
    expect(
      XEUtils.isEmpty(function () {})
    ).toEqual(true)
  })

  test('isNull()', () => {
    expect(
      XEUtils.isNull(0)
    ).toEqual(false)
    expect(
      XEUtils.isNull(false)
    ).toEqual(false)
    expect(
      XEUtils.isNull(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isNull(/null/)
    ).toEqual(false)
    expect(
      XEUtils.isNull({})
    ).toEqual(false)
    expect(
      XEUtils.isNull([])
    ).toEqual(false)
    expect(
      XEUtils.isNull(undefined)
    ).toEqual(false)
    expect(
      XEUtils.isNull('null')
    ).toEqual(false)
    expect(
      XEUtils.isNull('')
    ).toEqual(false)
    expect(
      XEUtils.isNull(null)
    ).toEqual(true)
  })

  test('isSymbol()', () => {
    expect(
      XEUtils.isSymbol({})
    ).toEqual(false)
    expect(
      XEUtils.isSymbol([])
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(0)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(false)
    ).toEqual(false)
    expect(
      XEUtils.isSymbol(function () {})
    ).toEqual(false)
    expect(
      XEUtils.isSymbol('a')
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.isSymbol(Symbol('a'))
      ).toEqual(true)
    }
  })

  test('isArguments()', () => {
    expect(
      XEUtils.isArguments()
    ).toEqual(false)
    expect(
      XEUtils.isArguments([])
    ).toEqual(false)
    expect(
      XEUtils.isArguments({})
    ).toEqual(false)
    expect(
      XEUtils.isArguments(0)
    ).toEqual(false)
    expect(
      XEUtils.isArguments(false)
    ).toEqual(false)
    expect(
      XEUtils.isArguments(function () {})
    ).toEqual(false)
    let method = function () {
      expect(
        XEUtils.isArguments(arguments)
      ).toEqual(true)
    }
    method()
  })

  test('isElement()', () => {
    expect(
      XEUtils.isElement({})
    ).toEqual(false)
    expect(
      XEUtils.isElement([])
    ).toEqual(false)
    expect(
      XEUtils.isElement(function () {})
    ).toEqual(false)
  })

  test('isDocument()', () => {
    expect(
      XEUtils.isDocument({})
    ).toEqual(false)
    expect(
      XEUtils.isDocument([])
    ).toEqual(false)
    expect(
      XEUtils.isDocument(function () {})
    ).toEqual(false)
  })

  test('isWindow()', () => {
    expect(
      XEUtils.isWindow({})
    ).toEqual(false)
    expect(
      XEUtils.isWindow([])
    ).toEqual(false)
    expect(
      XEUtils.isWindow(function () {})
    ).toEqual(false)
  })

  test('isFormData()', () => {
    expect(
      XEUtils.isFormData({})
    ).toEqual(false)
    expect(
      XEUtils.isFormData([])
    ).toEqual(false)
    expect(
      XEUtils.isFormData('a=1')
    ).toEqual(false)
    expect(
      XEUtils.isFormData(new FormData())
    ).toEqual(true)
  })

  test('isMap()', () => {
    expect(
      XEUtils.isMap({})
    ).toEqual(false)
    expect(
      XEUtils.isMap([])
    ).toEqual(false)
    expect(
      XEUtils.isMap(new Map())
    ).toEqual(true)
  })

  test('isWeakMap()', () => {
    expect(
      XEUtils.isWeakMap({})
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap([])
    ).toEqual(false)
    expect(
      XEUtils.isWeakMap(new WeakMap())
    ).toEqual(true)
  })

  test('isSet()', () => {
    expect(
      XEUtils.isSet({})
    ).toEqual(false)
    expect(
      XEUtils.isSet([])
    ).toEqual(false)
    expect(
      XEUtils.isSet(new Set())
    ).toEqual(true)
  })

  test('isWeakSet()', () => {
    expect(
      XEUtils.isWeakSet({})
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet([])
    ).toEqual(false)
    expect(
      XEUtils.isWeakSet(new WeakSet())
    ).toEqual(true)
  })

  test('isLeapYear()', () => {
    expect(
      XEUtils.isLeapYear('2018-12-01')
    ).toEqual(false)
    expect(
      XEUtils.isLeapYear('2020-12-01 10:30:30')
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(new Date(2012, 1, 1).getTime())
    ).toEqual(true)
    expect(
      XEUtils.isLeapYear(new Date(2020, 11, 1))
    ).toEqual(true)
  })

  test('isEqual()', () => {
    expect(
      XEUtils.isEqual(0, false)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(true, 1)
    ).toEqual(false)
    expect(
      XEUtils.isEqual(false, true)
    ).toEqual(false)
    expect(
      XEUtils.isEqual({}, function () {})
    ).toEqual(false)
    expect(
      XEUtils.isEqual({}, [])
    ).toEqual(false)
    expect(
      XEUtils.isEqual({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      XEUtils.isEqual([undefined], [null])
    ).toEqual(false)
    expect(
      XEUtils.isEqual([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      XEUtils.isEqual({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      XEUtils.isEqual([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      XEUtils.isEqual([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      XEUtils.isEqual({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      XEUtils.isEqual({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      XEUtils.isEqual([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('property()', () => {
    let getName = XEUtils.property('name')
    expect(
      getName({ name: 'test11', age: 25, height: 176 })
    ).toEqual('test11')
    expect(
      getName({ age: 25, height: 176 })
    ).toEqual(undefined)
  })

  test('getType()', () => {
    expect(
      XEUtils.getType()
    ).toEqual('undefined')
    expect(
      XEUtils.getType(null)
    ).toEqual('null')
    expect(
      XEUtils.getType('')
    ).toEqual('string')
    expect(
      XEUtils.getType(1)
    ).toEqual('number')
    expect(
      XEUtils.getType([])
    ).toEqual('array')
    expect(
      XEUtils.getType({})
    ).toEqual('object')
    expect(
      XEUtils.getType(false)
    ).toEqual('boolean')
    expect(
      XEUtils.getType(function () {})
    ).toEqual('function')
    if (typeof Symbol !== 'undefined') {
      expect(
        XEUtils.getType(Symbol('name'))
      ).toEqual('symbol')
    }
  })

  test('uniqueId()', () => {
    expect(
      XEUtils.uniqueId()
    ).toEqual(1)
    expect(
      XEUtils.uniqueId()
    ).toEqual(2)
    expect(
      XEUtils.uniqueId('prefix_')
    ).toEqual('prefix_3')
  })

  test('getSize()', () => {
    expect(
      XEUtils.getSize('')
    ).toEqual(0)
    expect(
      XEUtils.getSize(false)
    ).toEqual(0)
    expect(
      XEUtils.getSize(-1)
    ).toEqual(0)
    expect(
      XEUtils.getSize(function () {})
    ).toEqual(0)
    expect(
      XEUtils.getSize('123')
    ).toEqual(3)
    expect(
      XEUtils.getSize([1, 3])
    ).toEqual(2)
    expect(
      XEUtils.getSize({ a: 2, b: 5 })
    ).toEqual(2)
  })

  test('slice()', () => {
    expect(
      XEUtils.slice([11, 22, 33, 44], 1)
    ).toEqual([22, 33, 44])
    expect(
      XEUtils.slice([11, 22, 33, 44], 1, 3)
    ).toEqual([22, 33])
    let method = function () {
      expect(
        XEUtils.slice(arguments, 1, 3)
      ).toEqual([22, 33])
    }
    method(11, 22, 33, 44)
  })

  test('indexOf()', () => {
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      XEUtils.indexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
  })

  test('lastIndexOf()', () => {
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      XEUtils.lastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
  })

  test('findIndexOf()', () => {
    expect(
      XEUtils.findIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      XEUtils.findIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(1)
  })

  test('findLastIndexOf()', () => {
    expect(
      XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      XEUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(3)
  })

  test('includes()', () => {
    expect(
      XEUtils.includes([11], 22)
    ).toEqual(false)
    expect(
      XEUtils.includes([11, 22], 22)
    ).toEqual(true)
  })

  test('assign()', () => {
    let obj1 = { bb: { b: 11 } }
    let obj2 = XEUtils.assign(obj1, { a: 11 })
    expect(
      obj1.bb === obj2.bb
    ).toEqual(true)
    expect(
      obj1.bb === obj2.bb
    ).toEqual(true)
    obj1 = { bb: { b: 11 } }
    obj2 = XEUtils.extend(true, obj1, { a: 11 })
    expect(
      obj1 === obj2
    ).toEqual(false)
    expect(
      obj1.bb === obj2.bb
    ).toEqual(false)
  })

  test('toStringJSON()', () => {
    expect(
      XEUtils.toStringJSON('{"a":1}')
    ).toEqual({ a: 1 })
    expect(
      XEUtils.toStringJSON('[11,22]')
    ).toEqual([11, 22])
  })

  test('toJSONString()', () => {
    expect(
      XEUtils.toJSONString({ a: 1 })
    ).toEqual('{"a":1}')
    expect(
      XEUtils.toJSONString([11, 22])
    ).toEqual('[11,22]')
  })

  test('keys()', () => {
    expect(
      XEUtils.keys(123)
    ).toEqual([])
    expect(
      XEUtils.keys({ a: 11, b: 22 })
    ).toEqual(['a', 'b'])
    expect(
      XEUtils.keys([11, 22])
    ).toEqual(['0', '1'])
    expect(
      XEUtils.keys('123')
    ).toEqual(['0', '1', '2'])
  })

  test('values()', () => {
    expect(
      XEUtils.values(123)
    ).toEqual([])
    expect(
      XEUtils.values({ a: 11, b: 22 })
    ).toEqual([11, 22])
    expect(
      XEUtils.values([11, 22])
    ).toEqual([11, 22])
    expect(
      XEUtils.values('123')
    ).toEqual(['1', '2', '3'])
  })

  test('entries()', () => {
    expect(
      XEUtils.entries(123)
    ).toEqual([])
    expect(
      XEUtils.entries({ a: 11, b: 22 })
    ).toEqual([['a', 11], ['b', 22]])
    expect(
      XEUtils.entries([11, 22])
    ).toEqual([['0', 11], ['1', 22]])
    expect(
      XEUtils.entries('123')
    ).toEqual([['0', '1'], ['1', '2'], ['2', '3']])
  })

  test('pick()', () => {
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, 'name', 'height')
    ).toEqual({ name: 'test11', height: 176 })
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, ['name', 'age'])
    ).toEqual({ name: 'test11', age: 25 })
    expect(
      XEUtils.pick({ name: 'test11', age: 25, height: 176 }, val => XEUtils.isNumber(val))
    ).toEqual({ age: 25, height: 176 })
  })

  test('omit()', () => {
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, 'name', 'height')
    ).toEqual({ age: 25 })
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, ['name', 'age'])
    ).toEqual({ height: 176 })
    expect(
      XEUtils.omit({ name: 'test11', age: 25, height: 176 }, val => XEUtils.isNumber(val))
    ).toEqual({ name: 'test11' })
  })

  test('first()', () => {
    expect(
      XEUtils.first(123)
    ).toEqual(undefined)
    expect(
      XEUtils.first(true)
    ).toEqual(undefined)
    expect(
      XEUtils.first('123')
    ).toEqual('1')
    expect(
      XEUtils.first({ a: 11, b: 22 })
    ).toEqual(11)
    expect(
      XEUtils.first([11, 22])
    ).toEqual(11)
  })

  test('last()', () => {
    expect(
      XEUtils.last(123)
    ).toEqual(undefined)
    expect(
      XEUtils.last(true)
    ).toEqual(undefined)
    expect(
      XEUtils.last('123')
    ).toEqual('3')
    expect(
      XEUtils.last({ a: 11, b: 22 })
    ).toEqual(22)
    expect(
      XEUtils.last([11, 22])
    ).toEqual(22)
  })

  test('each()', () => {
    let rest = []
    XEUtils.each([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 0], [22, 1], [33, 2]])
  })

  test('lastEach()', () => {
    let rest = []
    XEUtils.lastEach([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 2], [22, 1], [11, 0]])
  })

  test('groupBy()', () => {
    expect(
      XEUtils.groupBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }], b: [{ type: 'b' }] })
    expect(
      XEUtils.groupBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }, { type: 'a' }], b: [{ type: 'b' }] })
  })

  test('countBy()', () => {
    expect(
      XEUtils.countBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 1, b: 1 })
    expect(
      XEUtils.countBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 2, b: 1 })
  })

  test('objectMap()', () => {
    expect(
      XEUtils.objectMap({ a: { type: 'a' }, b: { type: 'b' } }, item => item.type)
    ).toEqual({ a: 'a', b: 'b' })
    expect(
      XEUtils.objectMap([11, 22, 33], item => item)
    ).toEqual({ 0: 11, 1: 22, 2: 33 })
  })

  test('clone()', () => {
    let v1 = { a: 11, b: { b1: 22 } }
    let v2 = XEUtils.clone(v1)
    expect(
      v1.b === v2.b
    ).toEqual(true)
    let v3 = XEUtils.clone(v1, true)
    expect(
      v1.b === v3.b
    ).toEqual(false)
  })

  test('delay()', done => {
    XEUtils.delay(function (name) {
      expect(
        name
      ).toEqual('test11')
      done()
    }, 300, 'test11')
  })

  test('bind()', () => {
    let rest = XEUtils.bind(function (val) {
      return this.name + ' = ' + val
    }, { name: 'test' })
    expect(
      rest(222)
    ).toEqual('test = 222')
    expect(
      rest(333)
    ).toEqual('test = 333')
  })

  test('once()', () => {
    let rest = XEUtils.once(function (val) {
      return this.name + ' = ' + val
    }, { name: 'test' })
    expect(
      rest(222)
    ).toEqual('test = 222')
    expect(
      rest(333)
    ).toEqual('test = 222')
  })

  test('after()', done => {
    function getJSON (url, complete) {
      setTimeout(function () {
        complete({ data: url })
      }, 200)
    }
    let finish = XEUtils.after(3, function (rests) {
      expect(
        rests
      ).toEqual([{ data: '/api/list1' }, { data: '/api/list2' }, { data: '/api/list3' }])
      done()
    })
    getJSON('/api/list1', finish)
    getJSON('/api/list2', finish)
    getJSON('/api/list3', finish)
  })

  test('before()', done => {
    let meeting = XEUtils.before(4, function (rests, val) {
      if (val === 222) {
        expect(
          rests
        ).toEqual([111, 222])
        done()
      }
    })
    meeting(111)
    meeting(222)
    meeting(333)
    meeting(444)
  })

  test('clear()', () => {
    expect(
      XEUtils.clear([11, 22, 33, 33])
    ).toEqual([])
    expect(
      XEUtils.clear([11, 22, 33, 33], undefined)
    ).toEqual([undefined, undefined, undefined, undefined])
    expect(
      XEUtils.clear([11, 22, 33, 33], null)
    ).toEqual([null, null, null, null])
    expect(
      XEUtils.clear({ b1: 11, b2: 22 })
    ).toEqual({})
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }, undefined)
    ).toEqual({ b1: undefined, b2: undefined })
    expect(
      XEUtils.clear({ b1: 11, b2: 22 }, null)
    ).toEqual({ b1: null, b2: null })
  })

  test('remove()', () => {
    let list = [11, 22, 33, 44]
    XEUtils.remove(list, item => item === 22)
    expect(
      list
    ).toEqual([11, 33, 44])
    let obj = { a: 11, b: 22, c: 33 }
    XEUtils.remove(obj, item => item === 22)
    expect(
      obj
    ).toEqual({ a: 11, c: 33 })
  })

  test('range()', () => {
    expect(
      XEUtils.range(0)
    ).toEqual([])
    expect(
      XEUtils.range(10)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      XEUtils.range(-5, 5)
    ).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
    expect(
      XEUtils.range(0, 10, 2)
    ).toEqual([0, 2, 4, 6, 8])
  })

  test('destructuring()', () => {
    expect(
      XEUtils.destructuring({ a: null }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11 })
    expect(
      XEUtils.destructuring({ a: 11, d: 44 }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11, d: 44 })
    expect(
      XEUtils.destructuring({ a: 11, c: 33, d: 44 }, { a: 11, b: 22, c: null, e: 55, f: 66 })
    ).toEqual({ a: 11, c: null, d: 44 })
  })
})