import java.util.*;

class Solution {
    public int countElements(int[] arr) {
        HashSet<Integer>set=new HashSet<>();
        for(int i=0;i<arr.length;i++){
            set.add(arr[i]);
        }
        int count=0;
        for(int i=0;i<arr.length;i++){
            if(set.contains(arr[i]+1)){
                count++;
            }
        }
        return count;
    }
}