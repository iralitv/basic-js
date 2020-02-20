module.exports = function repeater( str, options ) {
    const {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 0,
        additionSeparator = ''
    } = options;

    const addExprWithoutLastSeparator =
        ( addition + additionSeparator )
            .repeat(additionRepeatTimes)
            .slice(0, -additionSeparator.length);

    const addExpr = ( additionRepeatTimes < 2 ) ? addition : addExprWithoutLastSeparator;

    return ( str + addExpr + separator ).repeat(repeatTimes).slice( 0, -separator.length )
};
  