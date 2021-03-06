class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int buy=0;
        int sell = 0;
        for(int i=0;i<prices.length-1;i++)
        {
           if(prices[i]<prices[i+1])
           {
               sell = i+1;
           }else
           {
               if(sell!=0){
                max = max + prices[sell]-prices[buy];
                sell=0;
               
               }
                buy=i+1;
           }
        }
        if(sell!=0){
            max = max + prices[sell]-prices[buy];
        }
        return max;
    } 
}
