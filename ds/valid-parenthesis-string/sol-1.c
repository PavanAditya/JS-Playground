/*
    ? Balancing parenthesis is a specific problem which needs a stack approach for solving
    ? Stack is created and all when an opening brace is encountered it is pushed into it
    ? When a closing brace is encountered the stack is poped out once and the braces are compared
    ?
    ?
    ?
    ? this problem is configured in such a way that the stack approach itself is not needed for solution
    ? and the stars in between the string are counted as per the requirement.
    ? No regular pattern is followed while considering and ignoring them -- (Could be problem with such kind of inputs)

    ! The regular and a suggested way of approch (even with the needed additions for stars consideration
    ! is not giving 100% success rate in this problem. -- Not a correct way of forming a question
*/

struct stringNode
{
    char data;
    struct stringNode *next;
};
int starCount = 0; // ? Specifically used only for '*'

void push(struct stringNode **top_ref, int new_data)
{
    struct stringNode *new_node = (struct stringNode *)malloc(sizeof(struct stringNode));

    if (new_node == NULL)
    {
        getchar();
        exit(0);
    }
    new_node->data = new_data;
    new_node->next = (*top_ref);
    (*top_ref) = new_node;
}

int pop(struct stringNode **top_ref)
{
    char res;
    struct stringNode *top;

    if (*top_ref == NULL)
    {
        getchar();
        exit(0);
    }
    else
    {
        top = *top_ref;
        res = top->data;
        *top_ref = top->next;
        free(top);
        return res;
    }
}

bool isMatchingPair(char character1, char character2)
{
    if (character1 == '(' && character2 == ')')
        return 1;
    else
        return 0;
}

bool checkValidString(char exp[])
{
        int j = 0, sc = 0;
        while (exp[j]) { // ? Specifically used only for '*'
            if (exp[j] == '*') {
                sc++;
            }
            j++;
        }
        if (j == sc)
            return 1;
        starCount = 0;
        int i = 0;
        struct stringNode *stack = NULL;

        while (exp[i]) {
            if (exp[i] == '*' && stack != NULL) {
                if (exp[i + 1] == '(' || exp[i + 1] == ')')
                starCount++;
            }
            if (exp[i] == '(')
                push(&stack, exp[i]);

            if (exp[i] == ')') {
                if (stack == NULL) {
                    if (starCount == 0) // ? Specifically used only for '*'
                        return 0;
                    else
                        starCount--;
                }
                else if (!isMatchingPair(pop(&stack), exp[i])) {
                    if (starCount == 0) // ? Specifically used only for '*'
                        return 0;
                    else
                        starCount--;
                }
            }
            i++;
        }
        if (i > 1 && exp[i-1] == '*') // ? Specifically used only for '*'
            return 0;
        if (stack == NULL)
            return 1;
        else if (stack != NULL && starCount > 0) { // ? Specifically used only for '*'
            int bracketCount = 0, tempStarCount = starCount;
            while (stack != NULL) {
                pop(&stack);
                bracketCount++;
                starCount--;
            }
            if (bracketCount == (tempStarCount - starCount) && starCount >= 0)
                return 1;
            else
                return 0;
        }
        else
            return 0;
}
