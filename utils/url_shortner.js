const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = lowercase.toUpperCase()
const number = '0123456789'
const mix = lowercase.split('').concat(uppercase.split(''), number.split('')) // 此陣列長度為 62

// 隨機五碼英數組合產出函式
const randomCode = function randomCode(digit) {
  let finalCode = ''
  for (let i = 1; i < digit + 1; i++) {
    const oneCode = Math.floor(Math.random() * 62)
    finalCode += mix[oneCode]
  }
  return finalCode
}

module.exports = randomCode