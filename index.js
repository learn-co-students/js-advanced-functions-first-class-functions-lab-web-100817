// Code your solution in this file! + `returnFirstTwoDrivers()` — Declare a variable with `const` that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the **first** two drivers in the array.

const returnFirstTwoDrivers = (function (drivers) {
  return drivers.slice(0,2)
});

const returnLastTwoDrivers = (function (drivers) {
  return drivers.slice(drivers.length-2,drivers.length)
});

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers]


function createFareMultiplier(fare) {
    return function(value) {
      return fare * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// + `selectDifferentDrivers()` — This function takes two arguments, an array of `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function. Based on these two arguments, `selectDifferentDrivers()` will return either the first two drivers or the last two drivers.

const selectDifferentDrivers = (function (drivers, aFunction) {
  return aFunction(drivers)
});
