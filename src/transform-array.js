module.exports = function transform( arr ) {
    if (!Array.isArray(arr)) throw Error('it\'s not an array');

    const transformArray = [];
    const transformControls = [
        '--double-prev',
        '--double-next',
        '--discard-next',
        '--discard-prev'
    ];

    for (let i = 0; i < arr.length; i++) {
        if(transformControls.includes(arr[i])) {
            switch(arr[i]) {
                case '--double-next':
                    if (i + 1 < arr.length) transformArray.push(arr[i + 1])
                    break;
                case '--discard-prev':
                    transformArray.pop();
                    break;
                case '--discard-next':
                    if (i + 2 < arr.length) i++;
                    break;
                case '--double-prev':
                    if (i - 1 > 0) transformArray.push(arr[i - 1]);
                    break;
                default: break;
            }
        } else {
            transformArray.push(arr[i]);
        }
    }

    return transformArray;
};
