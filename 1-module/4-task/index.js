function checkSpam(str) {
  let lowerStr = str;
  return lowerStr.includes('1xBet'[0, 1, 2, 3, 4].toUpperCase() ) || lowerStr.includes('XXX'.toLowerCase() );
}