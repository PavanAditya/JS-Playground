class FirstUnique {
    private Queue<Integer> queue;
    private Map<Integer,Boolean> map;
    
    public FirstUnique(int[] nums) {
        queue = new LinkedList<>();
        map = new HashMap<>();
        
        for (int i = 0 ; i < nums.length; i ++){
            if (!map.containsKey(nums[i])){
                map.put(nums[i],false);
            }
            else{
                map.put(nums[i],true);
            }
        }   
            
        for (int i = 0 ; i < nums.length; i ++){
            if (!map.get(nums[i])){
                queue.add(nums[i]);
            }
        }
        
    }
    
    public int showFirstUnique() {
        if (queue.isEmpty()) 
            return -1;
        
        int current = queue.peek();
        while (map.get(current)){
            queue.poll();
            if (queue.isEmpty()) 
                return -1;
            current = queue.peek();
        }
        return current;
    }
    
    public void add(int value) {
        if (!map.containsKey(value)){
            map.put(value,false);
            queue.add(value);
        } else{
            map.put(value,true);
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */