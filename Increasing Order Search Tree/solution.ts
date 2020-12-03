class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null){
        this.val = (val===undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}



function dfBST(root: TreeNode | null, arr: number[]): number[] {
    if(root === null) {
        return 
    }
    arr.push(root.val)
    if(root.left !== null){
        dfBST(root.left, arr)
    }
    if(root.right !== null){
        dfBST(root.right, arr)
    }
}

function increasingBST(root: TreeNode | null): TreeNode | null {
    let values: number[] = []
    dfBST(root, values)
    values.sort((a, b) => a - b)
    let newRoot = new TreeNode(values[0])
    let previous = newRoot
    for(let i = 1; i < values.length; i++){
        let currentNode = new TreeNode(values[i])
        previous.right = currentNode
        previous = currentNode
    }
    return newRoot
};