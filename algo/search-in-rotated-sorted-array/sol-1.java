class Solution {
    public int search(int[] nums, int target) {
        //FIRST APPROACH
        if(nums.length!=0){
            int index=-1;
            if(target==nums[0]){
                index=0;
            }else if(target<nums[0]){
                for(int i=nums.length-1;i>=0;i--){
                    if(nums[i]==target){
                        index=i;
                        break;
                    }else if(nums[i]<target){
                        break;
                    }
                }
            }else{
                for(int i=0;i<nums.length;i++){
                    if(nums[i]==target){
                        index=i;
                        break;
                    }else if(nums[i]>target){
                        break;
                    }
                }
            }
            return index;
        }
        else return -1;
    }
}