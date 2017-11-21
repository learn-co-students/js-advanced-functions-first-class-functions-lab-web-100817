// Code your solution in this file!
const returnFirstTwoDrivers = function (ar) {return ar.slice(0,2);};

const returnLastTwoDrivers = function (ar) {return ar.slice(-2);};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fm) {return function (f) {return f * fm};};

// const fareDoubler = function (f) {return f * 2;};
const fareDoubler = function (f) {return createFareMultiplier(2)(f);};
const fareTripler = function (f) {return createFareMultiplier(3)(f);};

const selectDifferentDrivers = function (ar, f) {return f(ar);};
