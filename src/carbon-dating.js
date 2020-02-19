const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
    const parseSampleActivity = parseFloat(sampleActivity);
   if ( typeof sampleActivity !== 'string' ||
       parseSampleActivity >= MODERN_ACTIVITY ||
       parseSampleActivity <= 0 ||
       parseSampleActivity !== parseSampleActivity) return false;

    const sampleRatio = MODERN_ACTIVITY / parseSampleActivity;
    const rateConstant = 0.693 / HALF_LIFE_PERIOD;
    const carbonDate = Math.log(sampleRatio) / rateConstant;

    return Math.floor(carbonDate) + 1;
};
