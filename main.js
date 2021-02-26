const r = require('ramda')

const calculateMonthlyPayememt = (interestRate,loanValue) => {
	const monthlyInterestRate = ((interestRate/100) / 12)
	const monthlyPayment = loanValue * monthlyInterestRate

	return monthlyPayment
}

const productSafetyCheck = (currentMonthlyPayment, expectedLoanValue, productArray) => {
    const returnedProducts = []
    r.forEach( product => {
        if(product.repaymentType === 'interest-only') {
            const expectedMonthlyPayment = calculateMonthlyPayememt(product.interestRate, expectedLoanValue)
            const tenPercentLimit = currentMonthlyPayment/10
            if((expectedMonthlyPayment - currentMonthlyPayment) < tenPercentLimit) {
                returnedProducts.push(product)
            }
        } else {
            returnedProducts.push(product)
        }
    }, productArray)
    return returnedProducts;
}

module.exports = {
    productSafetyCheck,
		calculateMonthlyPayememt
}
