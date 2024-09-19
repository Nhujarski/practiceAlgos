/* 
Towers of Hanoi is a puzzle with three rods and a few disks of varying sizes. The disks are stacked in ascending order on the leftmost rod as follows:

    |          |          |
   [1]         |          |
  [ 2 ]        |          |
 [  3  ]       |          |
  Rod A      Rod B      Rod C
The object of the puzzle is to move all disks from rod A to rod C. To so, there are a few rules that must be followed:

Each move may move the top disk of any rod and place it onto the top of another rod
A disk may not be moved on top of a smaller disk; that is a disk of size N can only be placed on top of disks sized N+1 or greater.
Only one disk may be moved at a time
For instance, a valid move in the above setup is:

    |          |          |
    |          |          |
  [ 2 ]        |          |
 [  3  ]       |         [1]
  Rod A      Rod B      Rod C
We represent this move with the string Disk 1 to Rod C. (Note that an invalid move after this would be Disk 2 to Rod C, as this would place a disk of size 2 on top of a disk of size 1.)
*/
//TODO review towers of hanoi
function solution(n) {
  let sol = [];

  function moveDisk(disk, start, destination, end) {
    if (disk == 0) return;

    moveDisk(disk - 1, start, end, destination);

    sol.push(`Disk ${disk} to Rod ${destination}`);

    moveDisk(disk - 1, end, destination, start);
  }
  moveDisk(n, 'A', 'C', 'B');
  return sol;
}
console.log(solution(3));
