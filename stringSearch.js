// StringSearch:FindtheindexwherethelargerstringAcontainsatargetstringT
function hashFunc(s, x) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = hash * x + s.charCodeAt(i);
  }
  return hash;
}

function strSearch(s, t) {
  let window = t.length;
  const x = 31;
  const target = hashFunc(t, x);
  let curr = hashFunc(s.substr(0, window), x);
  if (curr === target) return 0;
  for (let i = window; i < s.length; i++) {
    curr -= s.charCodeAt(i - window) * x ** (window - 1);
    curr *= x;
    curr += s.charCodeAt(i);
    if (curr === target && s.substr(i - window + 1, window) === t) {
      return i - window + 1;
    }
  }
  return -1;
}

console.log(strSearch("Hello world", "ello"));
//1
console.log(strSearch("Hello world you stinky cupcake monster", "mon"));
//31
