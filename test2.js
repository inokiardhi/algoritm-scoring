function designerPdfViewer(h, word) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letterHeight = [];
  
  for (let i = 0; i < word.length; i++){
    letterHeight.push(h[alphabet.indexOf(word[i])]);
  }
  
  let tallest = letterHeight.sort()[letterHeight.length-1];
  
  console.log(h[alphabet.indexOf(word[0])])
  return tallest * word.length;

}





const result = (testStudent, testCase) => testStudent === testCase

// console.log(result(designerPdfViewer([
//     1, 3, 1, 3, 1, 4, 1, 3,
//     2, 5, 5, 5, 5, 5, 5, 5,
//     5, 5, 5, 5, 5, 5, 5, 5,
//     5, 7]
//   , "zaba",), 28))

  console.log(result(designerPdfViewer([
    5, 1, 2, 7, 1, 3, 1, 3,
    2, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5,
    5, 7]
  , "daga",), 28))

//   console.log(result(designerPdfViewer([
//     5, 1, 2, 7, 1, 3, 1, 100,
//     2, 33, 5, 20, 119, 5, 5, 5,
//     20, 1, 17, 5, 12, 5, 13, 88,
//     15, 77]
//   , "xhy",), 300))