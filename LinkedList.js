//Linked Lists

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

    // Insert first node
    // Set head to the new node
    // Set the next value to the current head
    // Increase the size
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    // Create a node
    // Create a current variable
    // If ll is empty, make the data the head
    // Otherwise set current to the head
    // Traverse down the linked list
    // While there is a current.next data point, then move the current
    // variable over one, so we can land on the last tail
    // 1 (curr) => 2 => 3 => null // while(current.next) // while(2)
    // 1 => 2 (curr) => 3 => null // while(current.next) // while(3)
    // 1 => 2 => 3 (curr) => null // while(current.next) // while(null)
    // While loop breaks with current on the last node
    // Set the last node's next to the data node
    insertLast(data) {
        let node = new Node(data);
        let current;

        //If linked list is empty, make the data the head
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // Insert at index
    // Edge case: inserting at index 0 // Reuse insertFirst function
    // Edge case: out of bounds // return
    // Otherwise, create the node
    // Create current and previous pointers, and count variable
    // Set current to head
    // while (count < index) // (0 < 1)
    // Set previous to current
    // Increase count
    // Set current to next
    // while (count < index) // (1 < 1)
    // Breaks while loop
    // node.next set to current node
    // previous.next set to the new node
    // increase the size
    insertAtIndex(data, index) {
        if(index === 0) {
            this.insertFirst(data);
            return;
        }

        if (index > this.size) {
            return;
        }

        const node = new Node(data);
        let current, previous, count = 0;

        //Set current to first
        current = this.head;

        while(count < index){
            previous = current; //node before index
            count++;
            current = current.next // node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    // Set current to the head
    // Set a count to 0
    // Traverse through the linked list => while(current)
    // Starting from the first node
    // CHECK IF COUNT == INDEX
    // If the count is equal to the index, then we have our node
    // Else, Set current to the next data point
    // Increase the count by 1
    // CHECK IF COUNT == INDEX
    // Repeat until index is found
    getAtIndex(index) {
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index) {
                console.log(current.data);
            }
            current = current.next;
            count++;
        }

        return;
    }

    // Remove at index
    // Edge case: index is out of range
    // Edge case: index is 0
    // Set current to the head
    // Traverse thru the linked list => while(count < index)
    // Increase count by 1
    // Set previous to current
    // Set current to next value
    // Once the previous = current; (previous is 1 node back from desired index removal)
    // Set the previous next's node to the currents next value
    // Current is the node that is removed
    // Decrement the size
    removeAtIndex(index){
        //code here
        if(index > 0 && index > this.size) return;
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0) this.head = current.next;

        while(count < index){
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }

    reverseList() {
        let prev = null;
        let following;
        let current = this.head;

        while(current){
            following = current.next;
            current.next = prev;
            prev = current;
            current = following;
        }

        this.head = prev;
        return prev;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    // 1 => 2 => 3 => null
    // set current to the head
    // while current has a value
    // print out that data
    // then set current to the next data value
    // 1 (curr) => 2 => 3 => null // prints 1
    // 1 => 2 (curr) => 3 => null // prints 2
    // 1 => 2 => 3 (curr) => null // prints 3
    // 1 => 2 => 3 => null (curr) // while loop breaks
    printList() {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertLast(500);
ll.insertLast(600);
ll.insertAtIndex(1, 0);
// ll.getAtIndex(0); //100
// ll.getAtIndex(1); //200
// ll.getAtIndex(2); //300
// ll.getAtIndex(6); //1
// ll.removeAtIndex(0);
// ll.clearList();
// ll.reverseList();
ll.printList();
