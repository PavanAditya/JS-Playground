typedef struct {
    int top;
    int* min;
    int* val;
} MinStack;

/** initialize your data structure here. */

MinStack* minStackCreate() {
    MinStack* stack = (MinStack*)malloc(sizeof(MinStack));
    if (!stack)
        return NULL;
    stack->top = 0;
    stack->val = (int*)malloc(sizeof(int) * 100000);
    stack->min = (int*)malloc(sizeof(int) * 100000);
    return stack;
}

void minStackPush(MinStack* obj, int x) {
    if (obj->top == 0 || x < obj->min[obj->top - 1])
        obj->min[obj->top] = x;
    else
        obj->min[obj->top] = obj->min[obj->top - 1];
    obj->val[obj->top++] = x;
}

void minStackPop(MinStack* obj) {
    return obj->val[obj->top--];
}

int minStackTop(MinStack* obj) {
    return obj->val[obj->top - 1];
}

int minStackGetMin(MinStack* obj) {
    return obj->min[obj->top - 1];
}

void minStackFree(MinStack* obj) {
    free(obj);
}

/**
 * Your MinStack struct will be instantiated and called as such:
 * MinStack* obj = minStackCreate();
 * minStackPush(obj, x);

 * minStackPop(obj);

 * int param_3 = minStackTop(obj);

 * int param_4 = minStackGetMin(obj);

 * minStackFree(obj);
*/