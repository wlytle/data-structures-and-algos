/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;

  //find the middle of the linked list
  let median = getMedian(head);
  // reverse the second half of the linked list
  let end = reverse(median);
  let start = head;
  while (start !== null && end !== null) {
    if (start.val !== end.val) return false;
    start = start.next;
    end = end.next;
  }
  return true;
};

function getMedian(head) {
  let slow = head;
  let fast = head;
  while (fast.next !== null) {
    fast = fast.next;
    if (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return slow;
}
function reverse(curr) {
  let prev = null;
  let next;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// @lc code=end
