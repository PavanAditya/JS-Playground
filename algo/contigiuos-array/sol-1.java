class Solution {
    public int findMaxLength(int[] nums) {
        HashMap<Integer, Integer> countMap = new HashMap<Integer, Integer>(); 
        int sum = 0;
        int maxLength = 0;
        int end = -1; 
        int start = 0; 
        for (int i = 0; i < nums.length; i++) { 
            nums[i] = (nums[i] == 0) ? -1 : 1; 
        }
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum == 0) { 
                maxLength = i + 1; 
                end = i; 
            }
            if (countMap.containsKey(sum + nums.length)) { 
                if (maxLength < i - countMap.get(sum + nums.length)) { 
                    maxLength = i - countMap.get(sum + nums.length); 
                    end = i; 
                } 
            } 
            else
                countMap.put(sum + nums.length, i); 
        }
        for (int i = 0; i < nums.length; i++) { 
            nums[i] = (nums[i] == -1) ? 0 : 1; 
        }
        return maxLength; 
    }
}