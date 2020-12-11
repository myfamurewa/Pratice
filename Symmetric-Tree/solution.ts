function isSymmetric(root: TreeNode): boolean {
    return helper(root, root)
}

function helper(left: TreeNode, right: TreeNode ){
    if(left == null && right == null){
        return true
    }
    if(left == null || right == null){
        return false
    }
    return right.val === left.val && helper(left.left, right.right) && helper(left.right, right.left)
}