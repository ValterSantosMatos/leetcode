export function longestPalindrome(s: string): string {
  if (!s.length) {
    return "";
  }

  let map = new Map<string, number[]>();
  let longest = s[0];

  // Create a hash table of chars and positions
  for (let i = 0; i < s.length; i++) {
    var value = map.get(s[i]);
    if (value) {
      map.set(s[i], [...value, i]);
    } else {
      map.set(s[i], [i]);
    }
  }

  map.forEach((values) => {
    if (values.length === 1) {
      return;
    }

    for (let i = values.length - 1; i > 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        if (values[i] - values[j] < longest.length) {
          continue;
        }

        // Check is palindrome
        var isPal = true;
        for (let z = 1; z <= Math.floor((values[i] - values[j]) / 2); z++) {
          if (s[values[i] - z] !== s[values[j] + z]) {
            isPal = false;
            break;
          }
        }

        if (isPal) {
          longest = s.substring(values[j], values[i] + 1);
        }
      }
    }
  });

  return longest;

  // for (let i = 0; i < s.length; i++) {
  //   window = "";
  //   for (let j = i; j < s.length; j++) {
  //     const char = s[j];

  //     // find the last a
  //     const lastIndex = s.indexOf()

  //     window = window + char;
  //     if (
  //       window === window.split("").reverse().join("") &&
  //       window.length > longest.length
  //     ) {
  //       longest = window;
  //     }
  //   }
  // }
}
