/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* middleNode(struct ListNode* head){
    // struct ListNode* temp;
    // int midNext, cnt = 1;
    // temp = head;
    // while (temp->next) {
    //     temp = temp->next;
    //     cnt++;
    // }
    // cnt = cnt/2;
    // while (cnt) {
    //     head = head->next;
    //     if (--cnt == 0)
    //         return head;
    // }
    // return head;
    struct ListNode* temp;
    temp = head;
    while (head) {
        if (head->next) {
            temp = temp->next;
            head = head->next->next;
        } else {
            head = head->next;
        }
    }
    return temp;
}

