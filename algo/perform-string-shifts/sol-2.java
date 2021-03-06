class Solution {
    public String stringShift(String s, int[][] shift) {
        int left=0;
        int right=0;
        boolean leftRotation=false;
        int totalRotation=0;
        for (int i=0;i<shift.length;i++){
            if(shift[i][0]==0){
              left+=shift[i][1];
            }else{
              right+=shift[i][1];
            }
        }
        
        if(left-right > 0){
            totalRotation=left-right;
            leftRotation=true;
        }else if(right-left > 0){
            totalRotation=right-left;
            leftRotation=false;
        }else{
            return s;
        }
        totalRotation=totalRotation%s.length();
        String ans="";
        if(leftRotation){
            ans=s.substring(totalRotation,s.length());
            ans+=s.substring(0,totalRotation);
        }else{
            ans=s.substring(s.length()-totalRotation,s.length());
            ans+=s.substring(0,s.length()-totalRotation);
        }
        
        return ans;
    }
}