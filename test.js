require('chai').should()

const ListNode = require('./index.js')

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
// 4 3 2 1 0

describe('Reverse a linked list', function () {
  
  it('should reverse a linked list iteratively', function () {
    testHead.reverseIteratively()
    testTail.printList().should.equal('0 1 2 3 4 ')
    testHead.printList().should.equal('4 ')
  });

  if (testHead.reverseRecursively) {
    it('should reverse a linked list recursevely', () => {
      testTail.reverseRecursively()
      testHead.printList().should.equal('4 3 2 1 0 ')
      testTail.printList().should.equal('0 ')
    })
  }
})
