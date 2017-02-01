function confirmEnding(str, target) {
  // Creating the variables needed
  var arrStr = [];
  var arrTar = [];
  var strLength = 0;
  var tarLength = 0;
  var diff = 0;
  var compare = "";

  // Split both string and mesure length
  arrStr = str.split('');
  arrTar = target.split('');
  strLength = arrStr.length;
  tarLength = arrTar.length;

  // Substract total length and call substr method
  diff = strLength - tarLength;
  compare = str.substr(diff,strLength);

  // Compare results
  if (compare === target) {
    return true;
  } else {
    return false;
  }
}



confirmEnding("Bastian", "n");
confirmEnding("Connor", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "pen");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
