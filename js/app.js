/* eslint-disable no-undef */
new Vue({
  el: '#app',
  data: {
    maxNumber: 3000,
    number: 100
  },
  computed: {
    fizzbuzz() {
      // const n = parseInt(this.maxNumber);
      if (this.number <= this.maxNumber) {
        const array = [...Array(this.number).keys()].map(i => i + 1);
        const newArray = array.map(e => {
          let text = '';
          if (e % 3 === 0) text += 'Fizz';
          if (e % 5 === 0) text += 'Buzz';
          if (text === '') text = e;
          return text;
        });
        return newArray;
      } else {
        return ['FizzBuzz Exercise'];
      }
    }
  }
});
