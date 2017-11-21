// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(fare){
    return fare * num;
  };
}

const double = createFareMultiplier(2)

function fareDoubler(fare){
  return double(fare);
}

const triple = createFareMultiplier(3)

function fareTripler(fare){
  return triple(fare);
}

function selectDifferentDrivers(arr, func){
  return func(arr);
}
