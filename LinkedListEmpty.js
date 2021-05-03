//Linked Lists
//insertFirst
//insertLast
//insertAtIndex
//getAtIndex
//removeAtIndex
//reverseList
//clearList
//printList

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        //code here
    }

    insertLast(data) {
        //code here
    }

    insertAtIndex(data, index) {
        //code here
    }

    getAtIndex(index) {
        //code here
    }

    removeAtIndex(index){
        //code here
    }

    reverseList() {
        //code here
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printList() {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

// ll.insertFirst(300);
// ll.insertFirst(200);
// ll.insertFirst(100);
// ll.insertLast(400);
// ll.insertLast(500);
// ll.insertLast(600);
// ll.insertAtIndex(1, 0);
// ll.getAtIndex(0); //100
// ll.getAtIndex(1); //200
// ll.getAtIndex(2); //300
// ll.getAtIndex(6); //1
// ll.removeAtIndex(0);
// ll.clearList();
// ll.reverseList();
// ll.printList();
