function palindrome(str) {
  // Formate the two strings properly
  str = str.replace(/[\W_]/g, '').toLowerCase();
  var strReverse = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');

  // Then compare them
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}
