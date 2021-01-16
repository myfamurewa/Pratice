function reverse(head){
    let node = head,
    previous,
    tmp;

    while(node){
        tmp = node.next;

        node.next = previous
        previous = node
        node = tmp
    }
    return previous
}

function reverseRecursive(head){
    if (!head || !head.next) {
        return head;
      }
      let tmp = reverse(head.next);
      head.next.next = head;
      head.next = undefined;
      return tmp;
}

function reverseIterative(head){
    if(head === null || head.next === null){
        return head
    }
    let current = head
    let previous = null
    let next = null
    while(current){
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
}