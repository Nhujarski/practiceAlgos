// TODO come back and study these tips and variartions

// # Questions

// ```
// * Most frequent element in array
// * Least frequent element in array +

// * Count the number of elements with exactly 2 occurrences ([8, 9, 8, 3, 9, 4] returns 2)- ++

// * Given an array with all number appearing 2 times and one number appearing 3 times, find the number that shows up 3 times. +++
// ```

// # Q1 - Count the # of elmeents with exactly 2 occurences

// ### Clarifications - 3-5 minutes
// ```
// * Q: Is the list going to be sorted
// * A: Unsorted
//     At worst we can solve in O(nlogn)

// * Q: Is the input valid?
// * A: You can assume that it's non null and the list may be empty
// Example: [] -> 0

// * Q: Can there be a list with no such elements?
// * A: Yap
// ```

// ### Algorithm - 3 min
// Goal: do it in O(n) time
// ```
// create a dictionary: Value -> # occurences
// sum - int
// loop through
//   increment in dictionary
//   if value in dictionary == 2 -> sum++
//   if value in dictionary == 3 -> sum--
// ret sum

// Alternative: Do above, except don't have a sum counter. Instead, iterate thru at the end and count # of 2 values
// ```

// ### Solution - ~15-20min
// ```javascript
// function solution(array) {
//   const counts = {};
//   let sum = 0;
//   for (const num of array) {
//     counts[num] = (counts[num] || 0) + 1;
//     if (counts[num] === 2) sum++;
//     if (counts[num] === 3) sum--;
//   }
//   return sum;
// }
// ```

// ```python
// def solution():
//   pass
// ```

// # Q2 - Find the number that shows up 3 times. All other numbers only show up twice.

// ### Clarifications - 3-5 minutes
// ```
// * Q: Is the list sorted?
// * A: Naw

// * Q: Is the input valid?
// * A: You're guaranteed to have exactly one number that shows up three times
//   -> list isn't empty. list.length >= 3
// ```

// ### Algorithm - 3 min

// Goal: do it in O(n) time

// Use a hash set instead of a dictionary
// ```
// set
// loop through array
//   if not in set add to set
//   if in set remove from set
// only the one that occurs 3 times is left
// ```

// ### Solution - ~15-20min
// ```javascript
// function solution() {

// }
// ```

// ```python
// def solution(array):
//   newSet = set()
//   for num in array:
//     if num not in newSet:
//       newSet.add(num)
//     else:
//       newSet.remove(num)

//   # for i in newSet:
//   #   return i
//   # next(iter(newSet)) # O(1)
//   # list(newSet)[0] # O(n)
//   return newSet.pop()

// print(solution([]))
// print(solution([]))
// print(solution([]))

// def test():
//   assert solution([1, 2, 2, 2, ]) == 2

// test()
// ```

// For all languages
// * Learn your standard lib
// * Read through docs of Map, Set, HashMap/OrderedMap, OrderedSet/HashSEt
// * For python - learn your list comprehensions
//   - You should be able to do a 2d list comprehension with no efforts
// * For javascript - learn your .map, .filter, .reduce
