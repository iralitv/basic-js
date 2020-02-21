module.exports = function transform( arr ) {
    arr.forEach((item, index, array) => {
        if (item === '--discard-next') {
            array.splice(index, 2)
        } else if (item === '--discard-prev') {
            array.splice(index - 1, 2)
        } else if (item === '--double-next') {
            array.splice(index, 1, array[index + 1])
        } else if (item === '--double-prev') {
            array.splice(index, 1, array[index - 1])
        }
    })

    return arr
};
