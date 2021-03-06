class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode temp=head;
        int length=0;
        while(temp!=null){
            length++;
            temp=temp.next;
        }
        
        int median= length/2;
        temp=head;
        length=0;
        while(temp!=null){
            if(median==length){
                head=temp;
                break;
            }
            length++;
            temp=temp.next;
        }
        return temp;
    }
}