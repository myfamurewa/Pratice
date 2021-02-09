function convertBST(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
    const right = helper(root.right, 0);
    const left = helper(root.left, root.val + right);
    root.val += right;
    return root;
};

var helper =  function(node, parent) {
    if (!node) return 0;
    const right = helper(node.right, parent);
    const left = helper(node.left, node.val + right + parent);
    node.val = node.val + right + parent;
    return node.val + left - parent;
}