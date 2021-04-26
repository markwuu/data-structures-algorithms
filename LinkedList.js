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

    // Get at index

    // Remove at index

    // Clear list

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
ll.printList();
