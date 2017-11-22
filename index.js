// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(-2)
}

 selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

 const createFareMultiplier = function (interger){
   return function (fare){
     return fare*interger
   }
 }

const fareDoubler = createFareMultiplier(2,2)

const fareTripler = createFareMultiplier(3,2)

const selectDifferentDrivers = function (array,arg){
  return arg(array)
}
