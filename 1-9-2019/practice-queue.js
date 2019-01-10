class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(element){     
        this.items.push(element);
    } 
    dequeue() {
        if(this.items.length < 1){
            return "Underflow"; 
        }else{
            return this.items.shift(); 
        } 
    } 
    front() {  
        if(this.items.length < 1){
          return null;  
        }else{
            return this.items[0]; 
        }  
    } 
};