function BSTIterator(root) {
    var stack = [];
    return {hasNext, next};
  
    function hasNext() {
      return root || stack.length;
    }
  
    function next() {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      var result = root.val;
      root = root.right;
      return result;
    }
  }