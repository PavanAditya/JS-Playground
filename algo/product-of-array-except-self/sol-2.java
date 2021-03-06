class Solution {
    public int[] productExceptSelf(int[] nums) {      
        int n=nums.length;
        int prod[]=new int[n];
        
        if (n == 1) { 
            nums[0]=0;
            return nums;
        } 
        
        int temp = 1; 
  
        for (int i = 0; i < n; i++) { 
            prod[i] = temp; 
            temp *= nums[i]; 
        }  
        temp = 1;
        
        for (int i = n - 1; i >= 0; i--) { 
            prod[i] *= temp; 
            temp *= nums[i]; 
        }
        
        return prod;
    }
}