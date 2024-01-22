// ? Question
// TODO: Calculate the similarity between two strings and return the percentage/probability of both being the same.

// ? Approach 1
// Levenshtein distance Approach. Wiki: https://en.wikipedia.org/wiki/Levenshtein_distance

// ? JS
function checkSimilarity(){
  var str1 = document.getElementById("lhsInput").value;
  var str2 = document.getElementById("rhsInput").value;
  document.getElementById("output").innerHTML = similarity(str1, str2);
}

function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }


// ? HTML
// <div><label for="lhsInput">String 1:</label> <input type="text" id="lhsInput" oninput="checkSimilarity()" /></div>
// <div><label for="rhsInput">String 2:</label> <input type="text" id="rhsInput" oninput="checkSimilarity()" /></div>
// <div>Match: <span id="output">No Input</span></div>


// ? Sample Input/Output
similarity('Stack Overflow','Stack Ovrflw') // Expected Output: 0.8571428571428571


// ! Question and Example Solutions Reference: https://sumn2u.medium.com/string-similarity-comparision-in-js-with-examples-4bae35f13968
