function rightSideViewIterative(root: TreeNode | null): number[] {
    if(!root){
        return []
    }
    let rightArr = []
    let rightNode = root
    while(rightNode){
        rightArr.push(rightNode.val)
        rightNode = rightNode.right
    }
    return rightArr
};

function rightSideViewRecursive(root: TreeNode | null, rightArr: number[] = []): number[] {
    if(!root){
        return rightArr
    }
    rightArr.push(root.val)
    if(root.right){
        rightSideViewRecursive(root.right, rightArr)
    } else {
        if(root.left){
            rightSideViewRecursive(root.left, rightArr)
        }
    }
    return rightArr
};

function rightSideView(root: TreeNode | null): number[] {
    let visibleVals = []
    if(root == null){
        return visibleVals
    }

    let queue = []
    queue.push(root)
    while(queue.length !== 0){
        let length = queue.length
        for( let i = 0; i < length; i++){
            let current = queue.shift()
            if(i == length - 1){
                visibleVals.push(current.val)
            }
            if(current.left !== null){
                queue.push(current.left)
            }
            if(current.right !== null) {
                queue.push(current.right)
            }
        }
    }
    return visibleVals
}