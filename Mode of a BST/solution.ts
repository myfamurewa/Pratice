let count = {}
function bstFrequency(root: TreeNode): number[]{
    if(root === null){
        return
    }
    if(count[root.val]){
        count[root.val] += 1
    } else {
        count[root.val] = 1
    }
    if(root.left !== null){
        bstFrequency(root.left)
    }
    if(root.right !== null){
        bstFrequency(root.right)
    }
    let mode = Math.max(...Object.values(count))
    return Object.keys(count).filter(key => count[key] === mode)
}


