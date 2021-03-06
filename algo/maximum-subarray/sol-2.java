class Solution {
    public int maxSubArray(int[] nums) {
        int max=Integer.MIN_VALUE;
        int endMax=0;
        for(int i=0;i<nums.length;i++){
            endMax+=nums[i]; //1,2,-1,4
            
            if(max<endMax)
                max=endMax;
            
            if(endMax<0){
                endMax=0;
            }
            
        }
        return max;
    }
}