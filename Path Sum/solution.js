const hasPathSum = function(root, sum) {
    if (!root) return false;
    if (!root.right && !root.left) return sum === root.val; 
    const left = hasPathSum(root.left, sum - root.val);
    const right = hasPathSum(root.right, sum - root.val);
    return left || right;
}