export function intToRoman(nums: number): string {
  let toReturn: string = "";
  let nBaseNumber: number = 0;
  let rest: number = nums;

  // Millions
  nBaseNumber = Math.floor(rest / 1000);
  toReturn = toReturn + nBase(nBaseNumber, "M", "", "");
  rest = rest % 1000;

  // Thousands
  nBaseNumber = Math.floor(rest / 100);
  toReturn = toReturn + nBase(nBaseNumber, "C", "D", "M");
  rest = rest % 100;

  // Hundreds
  nBaseNumber = Math.floor(rest / 10);
  toReturn = toReturn + nBase(nBaseNumber, "X", "L", "C");
  rest = rest % 10;

  // Dozens
  nBaseNumber = Math.floor(rest / 1);
  toReturn = toReturn + nBase(nBaseNumber, "I", "V", "X");
  rest = rest % 1;

  return toReturn;
}

export function nBase(
  nBase10: number,
  oneS: string,
  fiveS: string,
  tenS: string
): string {
  if (nBase10 < 1) {
    return "";
  }

  switch (nBase10) {
    case 1:
      return oneS;
    case 2:
      return oneS + oneS;
    case 3:
      return oneS + oneS + oneS;
    case 4:
      return oneS + fiveS;
    case 5:
      return fiveS;
    case 6:
      return fiveS + oneS;
    case 7:
      return fiveS + oneS + oneS;
    case 8:
      return fiveS + oneS + oneS + oneS;
    case 9:
      return oneS + tenS;
    default:
      return tenS;
  }
}
