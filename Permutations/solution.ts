
function permute(nums: number[]): number[][] {
 
    let ans = []
    let temp = []
    let visited = []
    for (let i = 0; i < nums.length; i++) visited[i] = 0

    function dfs() {
        if (temp.length == nums.length) {
            ans.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] == 0) {
                temp.push(nums[i])
                visited[i] = 1
                dfs()
                temp.pop()
                visited[i] = 0
            }
        }

    }
    dfs()
    return ans
}
