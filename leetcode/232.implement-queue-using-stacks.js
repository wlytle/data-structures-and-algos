/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (empty(this.s2)) {
    flush(this.s1, this.s2);
  }
  return this.s2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (empty(this.s2)) {
    flush(this.s1, this.s2);
  }
  return peek(this.s2);
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (empty(this.s2)) flush(this.s1, this.s2);
  return empty(this.s2) ? true : false;
};

function flush(s1, s2) {
  while (!empty(s1)) {
    s2.push(s1.pop());
  }
}

function peek(s) {
  return s[s.length - 1];
}

function empty(s) {
  return s.length ? false : true;
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
