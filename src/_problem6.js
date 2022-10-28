function createPair(i, j) {
  return i < j ? [i, j] : [j, i];
}

function combPairs(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i === j) continue;
      const p = createPair(i, j);
      if (pairs.findIndex(([i2, j2]) => i2 === p[0] && j2 === p[1]) !== -1)
        continue;
      pairs.push(p);
    }
  }

  return pairs;
}

function hasDuplicateChars(n1, n2) {
  for (let i = 1; i < n1.length - 1; i++) {
    const cc = n1[i - 1] + n1[i];
    if (n2.match(cc) !== null) {
      return true;
    }
  }
  return false;
}

function problem6(forms) {
  const r = [];

  for ([i, j] of combPairs(forms)) {
    const [a, b] = [forms[i], forms[j]];
    if (hasDuplicateChars(a[1], b[1])) {
      r.push();
    }
  }

  return r;
}

module.exports = problem6;
