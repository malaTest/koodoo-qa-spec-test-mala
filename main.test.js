const {productSafetyCheck} = require('./main')
const {calculateMonthlyPayememt} = require('./main')
const jsonFile = require('./productList.json')


const interestOnlyJson = jsonFile.filter(el => el.repaymentType === 'interest-only')

test('Ensure Repayment Mortgages are not filtered',() =>{
  const productList = [{
    productId:1,
    repaymentType:"repayment",
    interestRate:0.1
  },{
    productId:2,
    repaymentType:"repayment",
    interestRate:20
  }]

  const expectedReturnedProducts = productList
  const currentMonthlyPayment = 200
  const loanValue = 100000

  expect(productSafetyCheck(currentMonthlyPayment,loanValue,productList)).toEqual(expectedReturnedProducts)
})


test('Ensure a list is returned if the repayment is less than 10%', () =>{
  const productList = [{
    productId: 2,
    repaymentType: 'interest-only',
    interestRate: 1.32 },
    {
      productId: 6,
      repaymentType: 'interest-only',
      interestRate: 1.1
    }]

    for(let i = 0; i < interestOnlyJson.length; i++){
      let loanValue = 200000
      let currentMonthlyPayment = 300
      productSafetyList = productSafetyCheck(currentMonthlyPayment, loanValue, interestOnlyJson)
    }
    expect(productSafetyList).toEqual(productList)
  })

  test('Ensure an empty array is returned if no products are found', () =>{
    const productList = []

    for(let i = 0; i < interestOnlyJson.length; i++){

      let loanValue = 200000
      let currentMonthlyPayment = 100

      productSafetyList = productSafetyCheck(currentMonthlyPayment, loanValue, interestOnlyJson)
    }

    expect(productSafetyList).toEqual(productList)
  })

// this is to show that any repayments equal to 10% will fail because main.js
//only checks under 10%
  test('Repayments equal to 10% are not returned, this is the error' , () => {
    const productList = [{
      productId: 2,
      repaymentType: 'interest-only',
      interestRate: 1.32 },
      {
        productId: 6,
        repaymentType: 'interest-only',
        interestRate: 1.1
      }]

      for(let i = 0; i < interestOnlyJson.length; i++){
        let loanValue = 300000
        let currentMonthlyPayment = 300

        let interestRate = interestOnlyJson[i].interestRate
        let monthlyRepayment = calculateMonthlyPayememt(interestRate,loanValue)
        const tenPercentLimit = currentMonthlyPayment/10

        productSafetyList = productSafetyCheck(currentMonthlyPayment, loanValue, interestOnlyJson)

        if ((monthlyRepayment - currentMonthlyPayment) <= tenPercentLimit){
          expect(productSafetyList).toEqual(productList)
        }

      }

    })
