const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    let addingElem = typeof value === 'undefined' ? '' : value;
    this.chain.push(`( ${addingElem} )`);
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position <= 0 ) {
      this.chain = [];
      throw 'wrong position number';
    }

    this.chain.splice(position - 1,1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let finishChain = this.chain.join('~~');
    this.chain = [];
    return finishChain;
  }
};

module.exports = chainMaker;
