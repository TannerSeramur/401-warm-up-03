'use strict';

const util = require('util');

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor (){
        this.head = null;
      }
      insert(value){
          let node = new Node(value);
          if(!this.head){
              this.head = node;
              return this;
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

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.print();