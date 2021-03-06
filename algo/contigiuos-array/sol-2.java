class Solution {
    public int findMaxLength(int[] nums) {
        // Map to keep track of sum formed so far till which index
        Map<Integer, Integer> sumMap = new HashMap<>();
        sumMap.put(0, -1);   // assume sum 0 came at index -1
        int maxLen = 0;
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            // lets model 0 as -1 and 1 as 1
            // this way we need to find longest array with sum 0
            sum += (nums[i] == 0) ? -1 : 1 ;  //-1
            // if same sum encountered again that means elements
            // from that index orwards till current index sum up
            // to zero i.e. equal number of 0 & 1
            if (sumMap.containsKey(sum)) {
                maxLen = Math.max(maxLen, i - sumMap.get(sum)); ///2,4-0===4
            }
            else {
                sumMap.put(sum, i);
            }
        }
        
        return maxLen;   
    }
}