/*
Input: nums = [2,7,11,15], target = 9\
Output: [0,1]\
Output: Çünkü nums[0] + nums[1] == 9,  return [0, 1].
*/

/*let array2 = [454, 100, 745, 152, 3655,566,325,36];
const total = 361;
*/

const array2 = [23, 1, 34, 12,44,1234,4321]; //array
const total = 5555; //target

let findIndex = (array, sum) => {
  for (let x in array) {
    for (let y = x++; y < array.length; y++) {//X'i bulduktan sonra diziyi baştan aramaması için x++ dedim.
      if (array[x] + array[y] === sum) {
        return console.log([
          array.indexOf(array[x]),
          array.lastIndexOf(array[y]),
        ]);
      }
    }
  }
};

findIndex(array2, total);
