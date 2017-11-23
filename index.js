// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {
  return function(fare) {
    return multiplyValue * fare;
  };
};
//
const fareDoubler = createFareMultiplier(2)
//
const fareTripler = createFareMultiplier(3)
//

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
