class Solution {
    public boolean isHappy(int n) {
         int temp = n;
        int sum = 0;
        while(sum!=1){
            sum=0;
            while (temp > 0) {
                int temp2 = temp % 10;
                sum += temp2 * temp2;
                temp = temp / 10;
            }
            System.out.println(sum);

            temp=sum;
            if (1 <= sum && sum <= 9) {
                if (sum == 1 || sum == 7) 
                    return true;
                else 
                    return false;
            }
        }

        return true;
    }
}