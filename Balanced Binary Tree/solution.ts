class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

function checkHeight(root: TreeNode | null): number {
    if(root === null){
        return 0
    }
    let leftHeight = checkHeight(root.left)
    let rightHeight = checkHeight(root.right)
    let heightDifference = leftHeight - rightHeight;
    if(Math.abs(heightDifference) > 1) {
        return - 1
    } else {
        return Math.max(leftHeight, rightHeight) + 1
        
    }
}


function isBalanced(root: TreeNode | null): boolean {
    if( root === null){
        return true
    }
    if(checkHeight(root) === - 1){
        return false
    } else {
        return isBalanced(root.left) && isBalanced(root.right)
    }
};