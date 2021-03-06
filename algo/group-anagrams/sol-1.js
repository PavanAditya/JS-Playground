/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// !This logic has a flaw i.e- while checkObject word is 'dad' then key names would only
// !have 'd' and 'a' as keys
/* var groupAnagrams = function (strs) {
  let resultArray = [];

  // check if the empty string is present then group them in one array

  if (strs.some((ele) => !ele)) {
    console.log('Inside some');
    let emptyStrSubArray = [];
    strs.forEach((ele, i) => {
      console.log('element', ele, 'ith', i);
      if (!ele) {
        emptyStrSubArray.push(ele);
      }
    });

    resultArray.push(emptyStrSubArray);
    // remove all the empty string
    strs = strs.filter((ele) => ele);
    console.log('emptyStrSubArray', emptyStrSubArray);
  }

  for (let i = 0; i < strs.length; i++) {
    console.log('%%%%%%%%%%%', strs);
    let resultInnerArray = [];

    // resultInnerArray.push(strs[i]);
    console.log('||||', i, 'strs of i ', strs[i], strs);

    if (strs[i]) {
      let checkArray = strs[i].split('');
      checkArray = checkArray.map((char) => (char = char.charCodeAt(0)));

      let checkObject = {};
      for (var variable of checkArray) {
        checkObject[variable] = false;
      }
      console.log('Initial Checker Object -> ', checkObject);

      for (let j = i + 1; j < strs.length; j++) {
        let charArray = strs[j].split('');
        // console.log('checkObject', checkObject);
        console.log(
          'checkArray',
          checkArray,
          ' charArray',
          charArray,
          'strs',
          strs
        );

        // Check if the checkObject and word element are anagram
        charArray.forEach((element) => {
          console.log(element, '::', checkObject);
          if (
            element.charCodeAt(0) in checkObject &&
            charArray.length === checkArray.length
          ) {
            checkObject[element.charCodeAt(0)] = true;
          }
        });

        console.log('>>>>>>>>>>>>>>', checkObject);

        if (Object.values(checkObject).every(Boolean)) {
          console.log('++', strs[j]);
          resultInnerArray.push(strs[j]);
          strs.splice(j, 1);
          console.log(strs);

          j--;
        }
        Object.keys(checkObject).forEach((ele) => {
          checkObject[ele] = false;
        });
        console.log('@@@@@@@@@@', checkObject);

        console.log('resultInnerArray ----', resultInnerArray);
      }
    }

    console.log('First Element', strs[i]);
    resultInnerArray.push(strs[i]);
    // strs.splice(i, 1);
    resultArray.push(resultInnerArray);
  }

  console.log(
    '----------------------------------------------------------------------'
  );
  return resultArray;
}; */

var groupAnagrams = function (strs) {
  let resultArray = [];
  let subArray = [];
  let initial = 0;

  // let initialElement = strs[initial];

  for (let i = initial + 1; i <= strs.length + 1 && strs.length !== 0; i++) {
    if (i === strs.length) {
      subArray.push(strs[initial]);
      strs.splice(initial, 1);

      resultArray.push(subArray);
      initial++;
      i = 0;
      // i = -1;
      subArray = [];
    }

    if (
      strs.length !== 0 &&
      [...strs[initial]].sort().toString() === [...strs[i]].sort().toString()
    ) {
      subArray.push(strs[i]);
      // remove that element
      strs.splice(i, 1);
      i--;
    }
  }
  // resultArray.push(subArray);

  return resultArray;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// console.log(groupAnagrams(['', 'b'])); // [["b"],[""]]
// console.log(groupAnagrams(['', ''])); //  [["",""]]
// console.log(groupAnagrams(['', 'b', ''])); // [["b"],["",""]]
// console.log(groupAnagrams(['h', 'h', 'h']));

// console.log(groupAnagrams(['tao', 'pit', 'cam', 'aid', 'pro', 'dog']));

// console.log(
//   groupAnagrams(['paw', 'dad', 'bog', 'day', 'day', 'mig', 'len', 'rat'])
// );

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
