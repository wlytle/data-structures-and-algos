/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head?.val) return head;
  let currNode = head;
  let nextNode = currNode.next;
  let dict = {},
    n = 0;

  while (nextNode) {
    dict[n] = currNode;
    head = checkNodeOrder(currNode, nextNode, n, dict, head);
    n++;
    currNode = nextNode;
    nextNode = currNode.next;
  }
  return head;
};

function checkNodeOrder(currNode, nextNode, n, dict, head) {
  if (nextNode.val < currNode.val) {
    swap(currNode, nextNode);
    if (n === 0) currNode = head;
    n -= 1;
    if (n >= 0) {
      checkNodeOrder(dict[n], currNode, n, dict, head);
    }
  }
  return head;
}

function swap(currNode, nextNode) {
  let temp;
  temp = currNode.val;
  currNode.val = nextNode.val;
  nextNode.val = temp;
}

// @lc code=end
