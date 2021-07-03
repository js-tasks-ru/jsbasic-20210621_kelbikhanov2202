function checkSpam(str) {
  let lowerStr = str;
  return lowerStr.includes('1xBet'[1, 4].toUpperCase() ) || lowerStr.toUpperCase().includes('XXX');
}