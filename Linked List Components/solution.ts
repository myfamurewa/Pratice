function numComponents(head: ListNode | null, G: number[]): number {
    if(!head) return null;
  let GSet = new Set(G);  
  let ret = 0, series = 0;
  while(head) {
    series = GSet.has(head.val) ? series + 1 : 0;
    if(series == 1)
      ret += 1;
    head = head.next;
  }
  return ret;
};
