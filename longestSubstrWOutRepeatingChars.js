var lengthOfLongestSubstring = function (s) {
  //itterate through string checking if next chatr matches
  //maybe saving each char tha tdoesnt match in an array or object of str to check future
  //char against.
  //"abcabcbb"
  // a b  c    a    b   c   a     b
  //   a  ab  abc       b   bc   bca

  compStr = "";
  substr = "";
  if (s === "") return 0;
  for (let i = 0; i < s.length; i++) {
    idx = i;
    compStr += s[idx];
    console.log("i", i, compStr);
    while (compStr.length !== 0) {
      //   console.log("idx", idx, "i", i, "compStr", compStr, "substr", substr);
      if (substr.length < compStr.length) {
        substr = compStr;
      }

      idx += 1;
      if (!compStr.includes(s[idx])) {
        if (idx >= s.length) {
          return substr.length;
        } else {
          compStr += s[idx];
        }
      } else {
        console.log("ELSE");
        compStr = "";
      }
    }
  }
  return substr.length;
};

console.log(lengthOfLongestSubstring("pwwkew"));
