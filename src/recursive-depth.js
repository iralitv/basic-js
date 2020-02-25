module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        return arr.some( item => Array.isArray(item) ) ?
          this.calculateDepth(arr.flat(), depth += 1) :
          depth
    }
};