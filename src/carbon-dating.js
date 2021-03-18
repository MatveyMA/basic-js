const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730; 

module.exports = function dateSample(sampleActivity) {
let age = 0;
let k = 0.693/HALF_LIFE_PERIOD;
if(isNaN(sampleActivity) || typeof sampleActivity !== 'string' || parseInt(sampleActivity)<=0 || typeof sampleActivity == 'undefined')
return false;
else if(typeof sampleActivity == 'string' && parseInt(sampleActivity)>0)
age = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k;
parseInt(age);
if (age>=0)
return Math.ceil(age);
}