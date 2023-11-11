export function getFormattedNumber(num: number, fractionDigits: number = 2): number {
  return Number(getFormattedNumberAsString(num, fractionDigits));
}

export function getFormattedNumberAsString(num: number, fractionDigits: number = 2): string {
  const factor = Math.pow(10, fractionDigits);
  return (Math.round(num * factor) / factor).toFixed(fractionDigits);
}
