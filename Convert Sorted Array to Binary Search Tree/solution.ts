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
    
    function sortedArrayToBST(nums: number[]): TreeNode | null {
        if(nums.length === 0){
            return null
        }
        if(nums.length < 3){
            let root = new TreeNode(nums[nums.length - 1], null, null)
            for(let i = nums.length - 2; i <= 0; i--){
                insertIntoBST(root, nums[i])
            }
            return root
        }
        let midpoint = Math.floor(nums.length/2)
        let root = new TreeNode(nums[midpoint], null, null)
        let  rightPointer = midpoint + 1
        let leftPointer = midpoint - 1
        while(nums[leftPointer] && nums[rightPointer]){
            insertIntoBST(root, nums[leftPointer])
            insertIntoBST(root, nums[rightPointer])
            rightPointer++
            leftPointer--
        }
        while(nums[rightPointer + 1] !== undefined){
            insertIntoBST(root, nums[rightPointer])
            rightPointer++
        }
        while(nums[leftPointer - 1] !== undefined){
            insertIntoBST(root, nums[leftPointer])
            leftPointer--
        }
        return root
    };

    var sortedArrayToBSTII = function(nums) {
        return createBST(nums);
        function createBST(nums) {
            if (nums.length == 0) return null;
            let mid = Math.floor(nums.length / 2);
            let root = new TreeNode(nums[mid]);
            root.left = createBST(nums.slice(0,mid));
            root.right = createBST(nums.slice(mid+1));
            return root;
        }
        // Time Complexity: O(N), we visit every element exactly once
        // Space Complexity: O(N), call stack can go as deep as number of elements
    }