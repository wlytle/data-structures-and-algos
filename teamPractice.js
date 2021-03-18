//List of movie times in order and flight length give true if two videos add up to exactly flight length
// flight = 100, movies = [10, 30, 70, 110] => true, if not return false
//dict {
// 90: true,
// 70: true,
// }

function movieTimes(flight, movies) {
  let dict = {};
  let curr;
  for (let i = 0; i < movies.length; i++) {
    curr = movies[i];
    if (dict[curr]) {
      return true;
    }
    dict[flight - curr] = true;
  }
  return false;
}

// console.log(movieTimes(100, [10, 30, 70, 110]));

// Same as above but give the index of the two movies else false

// Same as above but include parameter(n) for a break that can be between 0 and n minutes long

//Given a string return true if the string can be rearanged to be a palindrome, return false otherwise
//e.g. 'boo' could be rearagned to be 'obo' so true should be returned.

//Given an array of positive integers, find a subarray that sums to a given number X.For e.g, input = [1,2,3,5,2] and X=8, Result = [3,5] (indexes 2,3)

//Reverse the words in a sentence

//Reverse an integer
