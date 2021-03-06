bool checkValidString(char exp[])
{
    // ! NOT SATISFIED WITH THE SOLUTION AND TEST CASES
    if (exp == NULL || exp[0] == NULL)
    {
        return true;
    }

    int low = 0;
    int high = 0;
    int i = 0;
    while (exp[i])
    {
        char c = exp[i];

        if (c == '(')
        {
            low++;
            high++;
        }
        else if (c == ')')
        {
            if (low > 0)
            {
                low--;
            }
            high--;
        }
        else
        {
            if (low > 0)
            {
                low--;
            }
            high++;
        }

        if (high < 0)
        {
            return false;
        }
        i++;
    }

    return low == 0;
}