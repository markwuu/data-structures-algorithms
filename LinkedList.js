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
        return;
    }

    // Insert last node

    // Insert at index

    // Get at index

    // Remove at index

    // Clear list

    // Print list data
    // 1 => 2 => 3 => null
    // set current to the head;
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

ll.insertFirst(100);
ll.insertFirst(200);
ll.printList();
