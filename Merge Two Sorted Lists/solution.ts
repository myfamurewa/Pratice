class ListNode {
        val: number
         next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let temp_node = new ListNode(0)
    let current_node = temp_node

    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            current_node.next = l1;
            l1 = l1.next
        } else {
            current_node.next = l2;
            l2 = l2.next
        }
        current_node = current_node.next
    }

    if (l1 !== null){
        current_node.next = l1
        l1 = l1.next
    }

    if (l2 !== null){
        current_node.next = l2
        l2 = l2.next
    }
    return temp_node.next
};
