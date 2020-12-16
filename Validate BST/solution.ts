
  // Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


function isValidBST(root: TreeNode | null): boolean {
    function validate(root: TreeNode | null, max, min): boolean {
        if(root === null){
            return true;
        } else if (max !== null && root.val >= max || min !== null && root.val <= min){
            return false
        } else {
            return validate(root.left, root.val, min) && validate(root.right, max, root.val)
        }
    }
    return validate(root, null, null)
};