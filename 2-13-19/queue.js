'use strict';

class Queue{
  constructor(){
    this.queue = [];
  }
  enqueue(val){
    this.queue.push(val);
  }
  dequeue(){
    this.queue.shift();
  }
  front() {  
    if(this.items.length < 1){
      return null;  
    }else{
        return this.items[0]; 
    }  
  } 
}