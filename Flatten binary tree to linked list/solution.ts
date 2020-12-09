function flatten(root: TreeNode | null): void {
    if(root === null){
        return
    }
    if (root.left){
        let last = root.left;
        while (last.right !== null){
            last = last.right
        }
        let tmp = root.right;
        root.right = root.left;
        last.right = tmp
        root.left = null
    }
    flatten(root.right)
};