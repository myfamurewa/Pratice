function averageOfLevels(root: TreeNode | null): number[] {
    const average = (arr) => arr.reduce((acc, el) => acc + el, 0) / arr.length;
   const valuesAtDepth = [];
  
   const recursion = function (node, depth = 0) {
    if (!node) {
      return;
    }

    if (!valuesAtDepth[depth]) {
      valuesAtDepth[depth] = [];
    }
    valuesAtDepth[depth].push(node.val);
    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);
  };

  recursion(root);

  return valuesAtDepth.map(average);
};