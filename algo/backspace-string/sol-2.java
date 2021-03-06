import java.util.*;
class Solution {
    public boolean backspaceCompare(String S, String T) {
        String sNew=helper(S);
        String tNew=helper(T);
        
        if(sNew.equals(tNew)){
            return true;
        }else{
            return false;
        }
    }
    
    public String helper(String str){
        Stack<Character> q = new Stack<Character>();
        
        for (int i = 0; i < str.length(); ++i)  
        {  
            if (str.charAt(i) != '#')  
                q.push(str.charAt(i));  
            else if (!q.isEmpty())  
                q.pop();  
        }
        String ans = "";  
  
        while (!q.isEmpty()) 
        {  
            ans += q.pop();  
        }  
  
        String answer = ""; 
        for(int j = ans.length() - 1; j >= 0; j--) 
        { 
            answer += ans.charAt(j); 
        } 
        return answer;
    }
}