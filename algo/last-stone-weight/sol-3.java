class Solution {
    public int lastStoneWeight(int[] stones) { 
            int counter=-1;
            while(counter!=(stones.length-1) && stones.length!=1) {
                Arrays.sort(stones);
                int max = stones[stones.length - 1];
                int secondMax = stones[stones.length - 2];

                if (max == secondMax) {
                    stones[stones.length - 1] = 0;
                    stones[stones.length - 2] = 0;
                    counter += 2;
                } else {
                    stones[stones.length - 1] = max - secondMax;
                    stones[stones.length - 2] = 0;
                    counter++;
            }
        }
        return stones[stones.length-1];
    }
}