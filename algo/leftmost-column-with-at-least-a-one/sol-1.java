/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface BinaryMatrix {
 *     public int get(int x, int y) {}
 *     public List<Integer> dimensions {}
 * };
 */

class Solution {
    public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
        List<Integer> dim = binaryMatrix.dimensions();
        int r = dim.get(0);
        int c = dim.get(1);
        
        int i = 0, j = c-1;
        while(i<r && j>=0){
            if(binaryMatrix.get(i,j) == 1){
                j--;
            }else{
                i++;
            }
        }
        if(j+1 == c) return -1; //never move left, all 0
        return j+1;
    }
}