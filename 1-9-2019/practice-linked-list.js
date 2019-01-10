'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = null;
    }
    add(value){
        let node = new Node(value);
        if(!this.head){
            return this.head = node;
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
            length++
        }
        console.log(util.inspect(this, {depth: length}));
        return this;
    }
}