const {productSafetyCheck} = require('./main')
const productList = require('./productList.json')

const currentPayment = 200
const expectedLoanValue = 200000

const approvedProducts = productSafetyCheck(currentPayment,expectedLoanValue,productList)

console.log(approvedProducts)
