'use strict';

class Node{
  constructor(val){
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }
  breadthFirst() {
    if (this.root === null) {
      return 'no items in tree';
    }
    let queue = [];
    queue.push(this.root);
    let forTests = [];

    
    while (queue.length > 0) {
      let current = queue[0];
      console.log(current.value);
      forTests.push(current.value);
      
      if (current.left !== null) {
        queue.push(current.left)
      }
      if (current.right !== null) {
        queue.push(current.right)
      }
      queue.shift()
    }
    return forTests;
  }

    preOrder(){
      let nodes = [];
  
      let _walk = (n) => {
          nodes.push(n.value);
          if(n.left !== null){
              _walk(n.left);
          }
          if(n.right !== null){
              _walk(n.right);
          }
      };
          _walk(this.root);
          console.log(nodes);
          return nodes;
  }
  
  inOrder(){
      let nodes = [];
  
      let _walk = (n) => {
        if(n.left !== null){
             _walk(n.left);
          }
          nodes.push(n.value);
          if(n.right !== null){
             _walk(n.right);
          }
      };
      _walk(this.root);
      console.log(nodes);
      return nodes;
  }
  
  postOrder(){
      let nodes = [];
  
      let _walk = (n) => {
          if(n.left !== null){
              _walk(n.left);
          }
          if(n.right !== null){
              _walk(n.right);
          }
          nodes.push(n.value);
      };
          _walk(this.root);
          console.log(nodes);
          return nodes;
  }
  
}