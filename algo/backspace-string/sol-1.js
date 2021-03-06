/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let StrS = removeBackspaceCharacter([...S]);
  let StrT = removeBackspaceCharacter([...T]);

  return StrS === StrT ? true : false;
};

function removeBackspaceCharacter(charArray) {
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === '#') {
      charArray[i] = charArray[i - 1] = null;
      i = i - 2;
    }
    charArray = charArray.filter((ele) => ele);
  }

  console.log(charArray);
  return charArray.join('');
}

// console.log(backspaceCompare('ab#c', 'ad#c'));
// console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
// console.log(backspaceCompare('a#c', 'b'));
// console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));

// console.log(backspaceCompare('a##c', '#a#c'));
