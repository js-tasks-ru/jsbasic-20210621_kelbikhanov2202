function checkSpam(str) {
  let lowerStr = str.toUpperCase();

  return lowerStr.endsWith('1xBet') || lowerStr.includes('XXX');
}
