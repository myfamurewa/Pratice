 class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }

function deleteDuplicatesII(head: ListNode | null): ListNode | null {
    if(head === null){
        return null
    }
    let current = head
    let tempNode = new ListNode(0)
    tempNode.next = head
    let count = {}
    while(current !== null){
        if(count[current.val]){
            count[current.val] += 1 
        } else {
            count[current.val] = 1
        }
    }
    current = head
    let previous = tempNode
    while(current !== null){
        if(count[current.val] > 1){
            previous.next = current.next
        } else {
            previous = current
        }
        current = current.next
    }
    return tempNode.next
}

function deleteDuplicatesIIFinal(head: ListNode | null): ListNode | null {
    let tempNode = new ListNode(0)
    tempNode.next = head

    let p = tempNode
    while(p.next !== null && p.next.next !== null){
        if(p.next.val == p.next.next.val){
            let dup = p.next.val;
            while(p.next!=null&&p.next.val==dup){
                p.next = p.next.next;
            }
        }else{
            p=p.next;
        }
    }
    return tempNode.next
}