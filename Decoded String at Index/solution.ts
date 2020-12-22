function decodeAtIndex(S: string, K: number): string {
  if (letterCount(S) === 1) {
    return S[0];
  }
  let decoded = "";
  for (let i = 0; i < S.length; i++) {
    if (isNumeric(S[i])) {
      let repeatAmount = Number(S[i]);
      for (let j = i + 1; j < S.length; j++) {
        if (isNumeric(S[j])) {
          repeatAmount = repeatAmount * 10 + Number(S[i]);
        } else {
          break;
        }
      }
      decoded = decoded.repeat(repeatAmount);
    } else {
      decoded += S[i];
    }
  }
  return decoded[K];
}
function isNumeric(num: any): boolean {
  return !isNaN(num);
}

function letterCount(arr: any): number {
  let letterCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNumeric(arr[i])) {
      letterCount++;
    } else {
      continue;
    }
  }
  return letterCount;
}
console.log(decodeAtIndex("leet2code3", 10));

var decodeAtIndexJS = function (S, K) {
  let n = S.length;
  let dp = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (S[i] >= "2" && S[i] <= "9") {
      dp[i + 1] = dp[i] * (S[i] - "0");
    } else {
      dp[i + 1] = dp[i] + 1;
    }
  }
  K--;
  for (let i = n - 1; i >= 0; i--) {
    K %= dp[i + 1];
    if (K + 1 == dp[i + 1] && !(S[i] >= "2" && S[i] <= "9")) {
      return "" + S[i];
    }
  }
  return null;
};
