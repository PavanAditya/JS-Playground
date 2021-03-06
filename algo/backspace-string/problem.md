# ! Backspace String Compare

Given two strings S and T, return if they are equal when both are typed
into empty text editors. # means a backspace character.

Input: S = "ab#c", T = "ad#c" ==> Output: true
Explanation: Both S and T become "ac".

Input: S = "ab##", T = "c#d#" ==> Output: true
Explanation: Both S and T become "".

Input: S = "a##c", T = "#a#c" ==> Output: true
Explanation: Both S and T become "c".

Input: S = "a#c", T = "b" ==> Output: false
Explanation: S becomes "c" while T becomes "b".

! solve it in O(N) time and O(1) space
