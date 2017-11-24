// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
  }

  const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
  }

  const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(){
    return (num * num);
  };
}

function fareDoubler(num){
  return function(){
    return (num * 2);
  }();
}

function fareTripler(num){
  return function(){
    return (num * 3);
  }();
}

function selectDifferentDrivers(drivers,callback){
  return callback(drivers);
}
