function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let linkedDic1 = {}
    let linkedDic2 = {}
    let ll1Current = headA
    let ll2Current = headB
    while(ll1Current !== null && ll2Current !== null){
        linkedDic1[ll1Current.val] = ll1Current.next.val 
        linkedDic2[ll2Current.val] = ll2Current.next.val 

        if(linkedDic2[ll1Current.val] && linkedDic1[ll1Current.val] === linkedDic2[ll1Current.val]){
            return ll1Current.val
        }

        if(linkedDic1[ll2Current.val] && linkedDic2[ll2Current.val] === linkedDic1[ll2Current.val] === linkedDic2[ll2Current.val]){
            return ll2Current.val
        }
        ll1Current = ll1Current.next
        ll2Current = ll2Current.next
    }
    while(ll1Current !== null){
        linkedDic1[ll1Current.val] = ll1Current.next.val
        if(linkedDic2[ll1Current.val] && linkedDic1[ll1Current.val] === linkedDic2[ll1Current.val] ){
            return ll1Current.val
        }
        ll1Current = ll1Current.next
    }

    while(ll2Current !== null){
        linkedDic2[ll2Current.val] = ll2Current.next.val
        if(linkedDic2[ll2Current.val] && linkedDic2[ll2Current.val]){
           return ll2Current.val 
        }
        ll2Current = ll2Current.next
    }
    return null
};
// Understand
// we want to return the value of the first node that is present in both linked lists
// ideally we want to do this in linear time with constant space usage
// the linked lists are not guaranteed to have the same length
// if don't find a common node return null
// we can't mutate the linked lists
// There are no cycles in the linked list
// values on the nodes are between one and a billion
// values are not guaranteed to be unique
// that means that to make sure that
// the nodes are actually the same we have to check to see if the next value is the same
// we need a way to keep track of the nodes that we've seen and their next value
// once we find a node with he same value and next then we can return 
// we also don't know which node will be longer
// so we need to have cases for either one
// Plan
// create a object to store the node value and the next value of each node encountered on each linked list
// traverse both linked lists and add the values and their next values to the dictionary
// after adding the node check to see if the node and the next value exist in the other dictionary
// if they do return them


