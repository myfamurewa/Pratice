function removeElements(head: ListNode | null, val: number): ListNode | null {
    let current = head
    let previous = null
    while(current !== null){
        if (current.val === val) {
            previous.next = current.next
            current.next = null
        }
    }
};