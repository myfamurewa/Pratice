function tree2str(t: TreeNode | null): string {
    if (!t){
        return "";
    }
    // let treeStr = ""
    let str = ""
    function tree2strBst(root: TreeNode | null): void {
        // if (t == null) {
        //     return
        // }
        // treeStr += `${t.val}(`
        // treeStr += t.left !== null ? tree2str(t.left) : ''
        // treeStr += t.right !== null ? tree2str(t.right) : ''
        // treeStr += ")"
        str = str.concat(root.val);

    if (root.left || root.right) {
      if (!root.left) {
        str = str.concat("()");
      }
      if (root.left) {
        str = str.concat("(");
        tree2strBst(root.left);
        str = str.concat(")");
      }
      if (root.right) {
        str = str.concat("(");
        root.right && tree2strBst(root.right);
        str = str.concat(")");
      }
    }
    }
    tree2strBst(t)
    return str
};