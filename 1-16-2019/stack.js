'use strict';

class Node{
  constructor(val){
    this.value = val;
    this.next = null
  }
}

class Stack{
  constricter(){
    this.top = null;
    this.length = 0;
  }
  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop(){
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  peek(){
    return this.top;
  }

}
