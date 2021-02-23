function isUnivalTree(root: TreeNode | null): boolean {
    return (!root.left || root.val == root.left.val && isUnivalTree(root.left)) && (!root.right || root.val == root.right.val && isUnivalTree(root.right));
};

