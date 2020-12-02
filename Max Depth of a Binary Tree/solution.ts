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

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  } else {
    let lDepth = maxDepth(root.left);
    let rDepth = maxDepth(root.right);
    let result = Math.max(lDepth, rDepth) + 1;
    return result;
  }
}
