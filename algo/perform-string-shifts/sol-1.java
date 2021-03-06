class Solution {
    static String leftrotate(String str, int d) {
        return str.substring(d) + str.substring(0, d);
    }
    
    public String stringShift(String s, int[][] shift) {
        for (int i = 0; i < shift.length; i++) {
            if (shift[i][0] == 0) {
                s = leftrotate(s, shift[i][1]);
            } else {
                s = leftrotate(s, s.length() - shift[i][1]);
            }
        }
        return s;
    }
}