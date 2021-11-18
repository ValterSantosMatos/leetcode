/* You are given two strings a and b of the same length. 
Choose an index and split both strings at the same index, 

Splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix, 
Splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. 

Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome.
A palindrome is a string that is spelt the same way forwards or backwards
i.e. kayak, level, wow, abccba, abcxcba 

When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty. 
For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are valid splits.

Return true if it is possible to form a palindrome string, otherwise return false.
*/

export const thisWordsHavePalindrome = (a: string, b: string) => {
  for (let i = 0; i < a.length - 1; i++) {
    const hasPalindrome = solve(i, a, b);
    if (hasPalindrome) {
      return true;
    }
  }

  return false;
};

const solve = (index: number, a: string, b: string) => {
  const aPrefix = a.substring(0, index);
  const aSuffix = a.substring(index);
  const bPrefix = b.substring(0, index);
  const bSuffix = b.substring(index);

  const word1 = aPrefix + bSuffix;
  const word2 = bPrefix + aSuffix;
  const isPalindrome1 = isPalindrome(word1);
  const isPalindrome2 = isPalindrome(word2);

  return isPalindrome1 || isPalindrome2;
};

const isPalindrome = (word: string): boolean => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    const charMatch = word[i] === word[word.length - 1 - i];

    if (charMatch === false) {
      return false;
    }
  }

  return true;
};
