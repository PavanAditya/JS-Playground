class Solution {
    public int lastStoneWeight(int[] stones) {
        ArrayList<Integer> al=new ArrayList<>();

         for(int i=0;i<stones.length;i++){
             al.add(stones[i]);
         }

         while(al.size()!=0 && al.size()!=1){
             Collections.sort(al);
             int max=al.get(al.size()-1);
             int secondMax=al.get(al.size()-2);
             al.remove(al.size()-1);
             al.remove(al.size()-1);
             if(max!=secondMax){
                 al.add(max-secondMax);
            }
         }
       
         if(al.size()==0)
             return 0;
         else 
             return al.get(0);
    }
}