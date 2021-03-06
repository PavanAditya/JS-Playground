class Solution {
    public boolean checkValidString(String s) {
        int a=0,b=0,p=0,q=0,n=s.length();
        char c;
        for(int i=0;i<n;i++){
            c=s.charAt(i);
            if(c=='(')
                a++;
            else if(c=='*')
                b++;
            else{
                if(a>0)
                    a--;
                else if(b>0)
                    b--;
                else
                    return false;
            }
            c=s.charAt(n-1-i);
            if(c==')')
                p++;
            else if(c=='*')
                q++;
            else{
                if(p>0)
                    p--;
                else if(q>0)
                    q--;
                else
                    return false;
            }
        }        
        return true;
    }
}