require('chai').should()

const { reverseIteratively, reverseRecursively } = require('./index.js')

class ListNode {
  constructor(num) {
    this.val = num
    this.next = null
  }
  printList() {
    let node = this
    let output = '' 
    while (node != null) {
      output += node.val + ' '
      node = node.next
    }
    return output
  }
}

// Initialize the test list:
const testHead = new ListNode(4)
const node1 = new ListNode(3)
testHead.next = node1
const node2 = new ListNode(2)
node1.next = node2
const node3 = new ListNode(1)
node2.next = node3
const testTail = new ListNode(0)
node3.next = testTail
// 4 3 2 1 0 ()

const testHead1 = new ListNode(4)
const testTail1 = testHead1
// 4 (just one node)

describe('Reverse a linked list', function () {
  
  it('should reverse a linked list iteratively', function () {
    reverseIteratively(testHead)
    testTail.printList().should.equal('0 1 2 3 4 ')
    testHead.printList().should.equal('4 ')
    testHead1.printList().should.equal(testTail1.printList())
  })

  if (reverseRecursively) {
    it('should reverse a linked list recursevely', () => {
      reverseRecursively(testTail)
      testHead.printList().should.equal('4 3 2 1 0 ')
      testTail.printList().should.equal('0 ')
      testTail1.printList().should.equal(testHead1.printList())
    })
  }
})
