// Code your solution in this file
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice((drivers.length - 2), (drivers.length))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
  return function (distance) {
    return distance * fare
  }
}

function fareDoubler (fare) {
  return fare * 2
}

function fareTripler (fare) {
  return fare * 3
}

function selectDifferentDrivers(collection, func) {
  return func(collection)
}
