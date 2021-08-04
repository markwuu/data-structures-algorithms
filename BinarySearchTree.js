//Binary Search Tree

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertNode(data) {
        const node = new Node(data);

        if(!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while(true) {
                if(data.id < current.data.id){
                    // Moving left
                    if(!current.left) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    // Moving right
                    if(!current.right) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    lookUpNode() {

    }

    removeNode(){

    }
}

const data = {
    name: "John",
    age: "24",
    position: "Software Engineer",
    id: 20
}

const data2 = {
    name: "Mark",
    age: "30",
    position: "Software Engineer",
    id: 10
}

const data3 = {
    name: "Ash",
    age: "27",
    position: "CEO",
    id: 5
}

const bst = new BinarySearchTree();
bst.insertNode(data);
bst.insertNode(data2);
bst.insertNode(data3);

console.log('bst', bst);
