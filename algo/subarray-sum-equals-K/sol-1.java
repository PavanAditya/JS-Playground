class Solution {
    public int subarraySum(int[] nums, int k) {
         HashMap <Integer, Integer> prevSum = new HashMap<>();  
        
        int res = 0;  
        int currsum = 0;  
        
        for (int i = 0; i < nums.length; i++) {  
        
            currsum += nums[i];    
        
            if (currsum == k)   
                res++;         
        
            if (prevSum.containsKey(currsum - k))   
                res += prevSum.get(currsum - k);  res=2
                
        
            Integer count = prevSum.get(currsum); 
            if (count == null) 
                prevSum.put(currsum, 1); 
            else
                prevSum.put(currsum, count+1);  
        }  
        
        return res;
    }
}