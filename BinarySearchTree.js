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
                if(data < current.data){
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

const bst = new BinarySearchTree();
bst.insertNode(20);
bst.insertNode(30);
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(40);

console.log('bst', bst);
