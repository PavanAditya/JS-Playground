import java.util.*;

class MinStack {
    /** initialize your data structure here. */
    Stack<Long> stack; 
    long minEle; 

    public MinStack() {
        stack = new Stack<Long>();
        minEle=0;
    }
    
    public void push(int x) {
        long longX = x;
        if (stack.empty()) minEle = longX;
        else {
            if (longX < minEle){ 
                long temp = longX;
                longX = 2*longX-minEle; 
                minEle = temp;
            }
        }
        stack.push(longX);
    }
    
    public void pop() {
        long top = stack.pop();
        if (top < minEle) 
            minEle = 2*minEle - top;
        
    }
    
    public int top() {
        long top = stack.peek();
        if (top <= minEle) return (int) minEle;
        return (int) top;
    }
    
    public int getMin() {
        return (int)minEle;
    }
}