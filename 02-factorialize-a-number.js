function factorialize(num) {
  // Starting from (n-1) to the integer one
  for (var i = num -1; i >= 1; i--) {
    num *= i;
  }
  if (num === 0) {
    return 1;
  }
  return num;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
