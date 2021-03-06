/*
    * Approach: PriorityQueue
    * Topic requirements: Take the two largest numbers each time, use the larger value-the smaller value, and then put the difference back into the set for sorting.
    * (If the current two largest numbers are equal, put 0, this is because 0 must be the smallest, and it also meets the return result of the title requirements)
    * After each operation, you need to reorder the collection.
    * There is no doubt that the above situation is very useful for the Heap data structure.
    * It can be solved by directly using PriorityQueue in Java.
    * Build the largest heap (in order from largest to smallest) (Using priority Queue)
    * ******
    * Time complexity: O (nlogn)
    * Space complexity: O (n) 
*/


class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> queue = new PriorityQueue<>((a, b) -> b - a);
        for (int stone : stones) {
            queue.offer(stone);
        }
        for (int i = 0; i < stones.length - 1; i++) {
            queue.offer(queue.poll() - queue.poll());
        }
        return queue.poll();
    }
}