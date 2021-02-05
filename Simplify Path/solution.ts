function simplifyPath(path: string): string {
    let canonicalPath = ""
    for(let i = 0; i < path.length; i++){
        console.log(path[i])
        if(i === path.length - 1 && path[i] === "/"){
            continue
        }
        if(path[i] === "."){
            continue
        }
        if(path[i] === "/" && canonicalPath[canonicalPath.length - 1] === path[i]){
            continue
        }
        canonicalPath += path[i]
    }
    return canonicalPath
};

function simplifyPathStack(path: string): string {
    const paths = path.split('/');
     const result = [];
     
     for (let i=0; i<paths.length; i++) {
       const currentPath = paths[i];
       
       if (currentPath === '' || currentPath === '.') {
         continue;
       } else if (currentPath === '..') {
         result.pop();
       } else {
         result.push(currentPath);
       }
     }
     
     return `/${result.join('/')}`;
   };