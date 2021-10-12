console.log('The file is tutorial 51');

function fruitsIterator(values) {
    let Index = 0;
    // we will return an object
    return {
        next: function () {
            if (Index < values.length) {
                // We will return below object
                return {
                    value: values[Index],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)


function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
makeRangeIterator().next();
console.log(makeRangeIterator().next());
console.log(makeRangeIterator().next().value);
console.log(makeRangeIterator().next().value);

function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }

  const n = myNumbers();
  n.next(); // 10
  n.next(); // 20
  n.next(); // 30

  console.log(show)



