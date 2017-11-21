// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  array = drivers.slice(0,2);
  return array
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
  return function (fare) {return fare * integer
  }
}

const fareDoubler = function (fare) {
  let newFunction = createFareMultiplier(2)
  return newFunction(fare)
}

const fareTripler = function (fare) {
  let newFunction = createFareMultiplier(3)
  return newFunction(fare)
}

function selectDifferentDrivers(drivers, thing) {
  return thing(drivers);
}
