export function isValid(s: string): boolean {
  const window: string[] = [];
  const closingBrackets = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    const closing = closingBrackets.get(char);
    if (!closing) {
      // Open bracket char
      window.push(char);
    } else if (window[window.length - 1] === closing) {
      // Parenthesis has closed
      window.pop();
    } else {
      // Last parenthesis is not closing
      window.push(char);
    }
  }

  const isValid = window.length === 0;
  return isValid;
}
