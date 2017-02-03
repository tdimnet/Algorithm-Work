function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase().split('');
  var str2Len = str2.length;

  for (var i = 0; i < str2Len; i++) {
    letter = str2[i];
    indexOf = str1.indexOf(letter);

    if (indexOf === -1) {
      return false;
    }
  }
  return true;
}


mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
