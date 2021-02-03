class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    if(!head){
        return false
    }
    let seen = {}
    let current = head

    while(current){
        if(seen[current.val] && current.next === seen[current.val]){
            return true
        }
        seen[current.val] = current.next
        current = current.next
    }
    return false
};