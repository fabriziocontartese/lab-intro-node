class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (typeof item !== 'number') {
      throw new Error('Only numbers are allowed');
    }
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    let sum = 0;
    if (this.length === 0) {
      return sum;
    }
    this.items.forEach(item => {
      sum += item;
    })
    return sum;
  }

  avg() {
    let sum = 0;
    let avg = 0;
    this.items.forEach(item => {
      sum += item;
    })
    avg = this.sum() / this.length;
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return avg; 
  }

  }





module.exports = SortedList;
