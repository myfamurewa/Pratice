var deleteDuplicates = function(head) {
    let curr = head
    let prev = null
    let originals = {}
    let times = 0
    while (curr !== null){
        if (originals[curr.val]){
            prev.next = curr.next
        } else {
            originals[curr.val] = 1
            prev = curr
        }
        
        curr = curr.next
        
    }
    return head
};