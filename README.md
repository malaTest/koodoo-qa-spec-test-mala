# koodoo-qa-spec-test
 
## Introduction
If you're reading this, then congrats! We're pleased with what we've seen so far of you, and hare pleased you're considering joining out Koodoo tech team! This is a small technical/aptitude challenge to get us more aquainted with how you think about problems and give us a basic understanding of your technical skills.

## The Role
As a QA in Koodoo, we hope for you to have:

* A basic understanding of a programming language (Don't worry too much if you're not a JS expert for this!)
* A good comprehension of various test types and processes
* A critical and analytical mindset that lends itself to thinking about how to test software
* The pragmatism to work out where confidence is most needed, and where it is less important
* Some experience with writing tests for software

## The Problem
Kenny (an important Koodood) is concerned that people taking on interest only mortgages are applying for ones outside of their comfort zone. He wants to be sure that people’s monthly payments for new mortgages are not too big compared to their current ones.

A new feature is being developed to enable an automatic check of the different type of mortgage products being shown, and to filter out those that are unsuitable.

The code for the feature is at a basic Proof Of Concept stage but we need to make sure it is correct before being implemented.

## Your Task
The system requires some test cases, initially Unit test cases that are written using the Jest framework.
Your task is to analyse the requirement and write a series of tests and provide data for them to ensure the functions perform up to the standard required with confidence, run the tests, and then to report any failures (there is at least 1 defect in the system). 
Please provide these tests by means of an online (ideally a github) repo, with code and issues. 

## Some Resources
**main.js** The code requiring testing
**index.js** gives samples of usage
**productList.json** is an example of data you might pass in
**main.test.js** is a sample Jest test against the functions

*YOU CAN IGNORE*
**package-lock.json**
**package.json**

## What you will need
To get started, you'll need to have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)., [node](https://nodejs.org/en/download/), and [npm](https://www.npmjs.com/get-npm) installed. Pull the repository with `git clone [REPO URL]`, run `npm install` in the folder that this creates, and you should be able to run your tests with `npm test`.

---

## The requirements
As an end user that visits a koodoo powered website
I want to only be shown products that have a monthly payment that are at most 10% different to my current monthly mortgage payment, when I have an interest only mortgage.
So that I do not get a mortgage that I can not afford

**Acceptance Criteria**
The calculation is only performed for Interest only mortgages, Repayment mortgages are usually taken out by more consertative people.
The calculated monthly payment of the new mortgages must be no more than 10% of the end users existing mortgage.
If no products are left after removal it is expected to return an empty list rather than no value

**Data** 
Passed into the feature 
	The users current monthly payment and the size of their expected mortgage
	An array of mortgage products that for each product have 
productId
interestRate - annual interest rate
repaymentType - either ‘interest-only’ or ‘repayment’

**Return Value**
An array of products that match the acceptance criteria


