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

function flatten(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  if (root.left) {
    let last = root.left;
    while (last.right !== null) {
      last = last.right;
    }
    let tmp = root.right;
    root.right = root.left;
    last.right = tmp;
    root.left = null;
  }
  flatten(root.right);
}
