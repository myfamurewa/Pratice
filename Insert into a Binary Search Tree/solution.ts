class TreeNode {
         val: number
         left: TreeNode | null
         right: TreeNode | null
         constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
     }
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val);

    if (val < root.val) root.left = insertIntoBST(root.left, val);
    else root.right = insertIntoBST(root.right, val);
  
    return root;
};

function insertIntoBSTIterative(root: TreeNode | null, val: number): TreeNode | null {
    if(!root){
        return new TreeNode(val)
    }
    
    let currentNode = root
    while(currentNode.val !== val){
        if(currentNode.val > val){
            if(!currentNode.left){
                currentNode.left = new TreeNode(val)
            }
            currentNode = currentNode.left
        } else {
            if(!currentNode.right){
              currentNode.right = new TreeNode(val)
            }
            currentNode = currentNode.right
        }
    }
    return root
}