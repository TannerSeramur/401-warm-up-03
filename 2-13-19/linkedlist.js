'use strict';

class Node{
  constuctor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  add(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  print(){
    let current = this.head;
    let length = 1;
    while(current.next){
      current = current.next;
      length++;
    }
    console.log(util.inspect(this, {depth: length}));
    return this;
  }
}