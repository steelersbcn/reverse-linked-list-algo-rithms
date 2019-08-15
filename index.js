/*
Implement the reverseIteratively function that reverses a singly-linked list.
You can assume that you always receive an instance of ListNode as argument.
Can you get a recursive solution?

class ListNode {
  constructor(num) {
    this.val = num
    this.next = null
  }
}
Example:
Input: 4 -> 3 -> 2 -> 1 -> 0 -> null
Output: 0 -> 1 -> 2 -> 3 -> 4 -> null
*/


let reverseIteratively
let reverseRecursively

// Iterative Solution
reverseIteratively = (head) => {
  // write your code HERE
  let p = null;
  let c = head;
  let n = c.next;
  while (c) {
    c.next = p;
    p = c;
    c = n;
    if (c) n = n.next;
  }
}

// (Extra!) Recursive Solution
// reverseRecursively = (head) => {
//   // write your code HERE
//
// }

module.exports = { reverseIteratively, reverseRecursively };
