class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.Root = null;
    this.arr = [];
  }

  isTreeEmpty() {
    return this.Root === null;
  }

  createTree(value) {
    // first create a new node
    let newNode = new Node(value);
    // then check if the root is empty
    if (this.isTreeEmpty()) {
      // if it is empty , assign to the root
      this.Root = newNode;
    } else {
      // if it is not, then either left or right , to compare we need to send the root as well
      this.insertNode(this.Root, newNode);
    }
  }

  insertNode(Root, newNode) {
    // check if value is less than root , then it will go left
    if (Root.value > newNode.value) {
      // check if left is empty, if yes then assign
      if (Root.left === null) {
        Root.left = newNode;
      } else {
        // if not then check left of left recursively
        this.insertNode(Root.left, newNode);
      }
      //   else the value will be assigned in right
    } else {
      // check if right of the root is available, if yes then assign
      if (Root.right === null) {
        Root.right = newNode;
      } else {
        // if not then search for right of right recursively
        this.insertNode(Root.right, newNode);
      }
    }
  }

  Search(Root, value) {
    if (this.isTreeEmpty) {
      return;
    } else if (Root.value == value) {
      return true;
    } else if (Root.value > value) {
      return this.Search(Root.left, value);
    } else if (Root.value < value) {
      return this.Search(Root.right, value);
    } else {
      console.log("not found");
    }
  }

  // DFS
  preOrder(root) {
    if (root) {
      // console.log(root.value);
      this.arr.push(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    return this.arr;
  }
  // DFS
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      this.arr.push(root.value);
      // console.log(root.value);
      this.inOrder(root.right);
    }
    return this.arr;
  }
  // DFS
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      // console.log(root.value);
      this.postOrder(root.right);
      this.arr.push(root.value);
    }
    return this.arr;
  }

  // BFS
  BFS() {
    let queue = [];
    queue.push(this.Root);
    while (queue.length) {
      let current = queue.shift();
      this.arr.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    console.log("BFS : ", this.arr);
  }

  // minimum value
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  removeNodeofvalue(value) {
    this.Root = this.deleteNode(this.Root, value);
  }
  deleteNode(root, value) {
    // if root is null
    if (root === null) {
      return null;
    }
    // if you did not reach the value yet

    // if value is in left
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
      // if value is on the right
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    }
    // if you reached the value
    else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

let bst = new BST();
bst.createTree(20);
bst.createTree(10);
bst.createTree(5);
bst.createTree(11);
bst.createTree(30);
bst.createTree(40);
bst.createTree(23);
// console.log("preorder : ", bst.preOrder(bst.Root));
// console.log("inorder : ", bst.inOrder(bst.Root));
// console.log("postorder : ", bst.postOrder(bst.Root));
// bst.BFS();
// console.log(bst);
// bst.Search( bst.Root, 5);
// console.log(bst.minValue(bst.Root));
// console.log(bst.maxValue(bst.Root));
bst.removeNodeofvalue(20);
bst.BFS();
