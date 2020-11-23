Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
function markdownTables(arr) {
  arr.insert(1, "")
  let output = arr.map((s, index) => {
    if(s === ""){
      return "|----|-----|"
    }
    
    let values = s.split(",")
    return `|${values[0]}|${values[1]}|`
  })
  return output.join("\n")
}

let test1 = ['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']
console.log(markdownTables(test1))