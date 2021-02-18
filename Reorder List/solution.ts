
// Understand
// we have a linked list of length n
// we want to reorder the linked list to have nth node appear before for the first node, the nth - 1 node appear before the second and so on until the nodes meet in the middle
// we are not given n
// we cannot change the values of n
// Plan
// to get the correct answer we need a place to store the nodes 
// and the length of the linked list
// Once we have those we can create two pointers
// with those pointers we can iterate through the list
// changing the next value of each pointer to the opposite pointer
// decrement or increment the pointer
// return the finished list
function reorderList(head: ListNode | null): void {
    let positions = []
    
    let current = head
    while(current){
        positions.push(current)
        current = current.next
    }
    let count = 0 
    let length = positions.length
    current = head
    while(count < length){
       if ( count === length - 1){
           current.next = null
           break;
       }
       if (count % 2 === 0){
           current.next = positions[length - Math.floor(count/2) - 1]
       } else {
           current.next = positions[Math.floor(count / 2) + 1]
       }

       current = current.next;
       count++
    }
};