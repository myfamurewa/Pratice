function findNb(m) {
     var sum = 0;
  for (n = 0; sum < m; n++) {
    sum = Math.pow(n*(n+1), 2) / 4;
  } if (sum === m) return n-1;
  else return (-1);
}

//Build cube challenge form code wars