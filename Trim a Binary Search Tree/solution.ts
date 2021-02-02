function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {

    function run(node) {
        if(!node) return null;
        const left = run(node.left);
        const right =  run(node.right);
        if(node.val < low) return right;
        if(node.val > high) return left;
        node.right = right;
        node.left = left;
        return node;
    }
    return run(root)
};