class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let current = l1
    let digitPlace = 1
    let l1Value = 0
    while(current){
        l1Value += current.val * digitPlace
        digitPlace *= 10
        current = current.next
    }

    current = l2
    digitPlace = 1
    let l2Value = 0
    while(current){
        l2Value += current.val * digitPlace
        digitPlace *= 10
        current = current.next
    }

    let head = new ListNode(0, null)
    let outputValue = l1Value + l2Value + ""
    let previous = head
    for(let i = outputValue.length - 1; i >= 0; i--){
        let newNode = new ListNode(Number(outputValue[i]), null)
        previous.next = newNode
        previous = newNode
    }
    return head.next
};

function addTwoNumbersII(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
}