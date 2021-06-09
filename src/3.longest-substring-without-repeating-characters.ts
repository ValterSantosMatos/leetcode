export function lengthOfLongestSubstring(s: string): number {
  let slidingWindow = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const collisionIndex = slidingWindow.indexOf(char);

    if (collisionIndex !== -1) {
      slidingWindow = slidingWindow.substring(collisionIndex + 1) + char;
    } else {
      slidingWindow = slidingWindow + char;
      if (slidingWindow.length > max) {
        max = slidingWindow.length;
      }
    }
  }

  return max;
}
