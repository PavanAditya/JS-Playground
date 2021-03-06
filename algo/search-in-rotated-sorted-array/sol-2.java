class Solution {
    public int search(int[] nums, int target) {
        
        // SECOND APPROCH
         int left = 0, right = nums.length - 1;
         int mid;
        
         while (left <= right) {
             mid = left + (right - left) / 2;
             if (target == nums[mid]) 
                 return mid;            
             else if (nums[mid] <= nums[right]) {
                 if (target > nums[mid] && target <= nums[right]) {
                     left = mid + 1;
                 } else
                     right = mid - 1;
             }else {
                 if (target < nums[mid] && target >= nums[left]) {
                     right = mid - 1;
                 }else
                     left = mid + 1;
             }
         }
        
         return -1;
    }
}