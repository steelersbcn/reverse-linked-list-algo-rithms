/*
Given a singly-linked list, reverse it iteratively.
Can you get a recursive solution?
*/

class ListNode {
  constructor(num) {
    this.val = num
    this.next = null
  }
  // Helper function to print the list
  printList() {
    let node = this
    let output = '' 
    while (node != null) {
      output += node.val + ' '
      node = node.next
    }
    return output
  }

  // Iterative Solution
  reverseIteratively() {
    // write your code here
  }

  // (Extra!) Recursive Solution      
  // reverseRecursively() {
  //   // write your code here
  // }
}

module.exports = ListNode
