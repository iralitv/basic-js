const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
   if ( typeof sampleActivity !== 'string' ||
       +sampleActivity >= MODERN_ACTIVITY ||
       +sampleActivity <= 0 ||
       +sampleActivity !== +sampleActivity) return false;

    const sampleRatio = MODERN_ACTIVITY / sampleActivity;
    const rateConstant = 0.693 / HALF_LIFE_PERIOD;
    const carbonDate = Math.log(sampleRatio) / rateConstant;

    return Math.floor(carbonDate) + 1;
};
