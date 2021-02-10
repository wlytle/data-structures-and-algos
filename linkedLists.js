class Node {
  constructor(next = null, data) {
    super();
    this.next = next;
    this.data = data;
  }
  getNext = () => {
    return this.next;
  };
  setNext = (next) => {
    this.next = next;
  };

  getData = () => {
    return this.data;
  };

  setData = (data) => {
    this.data = data;
  };
}

class LinkedList {
  constructor(head, tail) {
    super();
    this.head = head;
    this.tail = tail;
  }
  getHead = () => {
    return this.head;
  };
  setHead = (head) => {
    this.head = head;
  };

  getTail = () => {
    return this.tail;
  };
  setTail = (tail) => {
    this.tail = tail;
  };
}
