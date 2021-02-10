class LLNode {
         val: number
         next: Node | null
         random: Node | null
         constructor(val?: number, next?: Node, random?: Node) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
             this.random = (random===undefined ? null : random)
         }
     }

function copyRandomList(head: LLNode | null): LLNode | null {
    // let current = head
    // let newListHead =new LLNode(0, null, null)
    // let cloneList = {}

    // while(current){
    //     cloneList[current.val] = [current.next, current.random]
    //     current = current.next
    // }

    // current = head
    // while(current){
    //     let newNode = new LLNode(current.val, cloneList[current.val][0], cloneList[current.val][1])
    //     current = current.next
    // }
    
    if (!head) return null;
    
    let pointer = head;
    
    // for each node - link it to a copy of itself
    // the copy has the same random and next properties as the original node
    while(pointer !== null) {
        // create new copyNode
        pointer.copy = new Node(pointer.val, pointer.next, pointer.random);
        // iterate forwards
        pointer = pointer.next;
    }
    
	// create a new pointer to the head of our copy LL
	// (this is what we will return)
    let copyHead = head.copy;
    
	// reset our pointer to the head of the list
	pointer = head;
    
    // set each copy node's next and random properties to the respective node's copy
    while(pointer !== null) {
        
        if (pointer.copy.next) {
            pointer.copy.next = pointer.copy.next.copy;            
        }
        if (pointer.copy.random) {
            pointer.copy.random = pointer.copy.random.copy;            
        }
        pointer = pointer.next;
    }
    
    // remove the references to the copy node on the original nodes
    pointer = head;
    while(pointer !== null) {
        pointer.copy = undefined;
        pointer = pointer.next;
    }
    
    // return our new copy list
    return copyHead;
};

function copyRandomListII(head: Node | null): Node | null {
    
    function createNewNodes(node) {
        if(!node) return;
        const newNode = new Node(node.val);
        newNode.next = node.next;
        node.next = newNode;
        createNewNodes(newNode.next);
    }
    
    function linkRandomNode(node) {
        if(!node) return;
        node.next.random = node.random ? node.random.next : null;
        linkRandomNode(node.next.next);
    }
    
    function restoreOriginal(node) {
        if(!node) return null;
        const temp = node.next;
        node.next = node.next.next;
        temp.next = restoreOriginal(node.next)
        return temp;
    }