#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>

bool isEven(long long number)
{
    return !(number & (long long)1);
}

long long   findAnswer(long long number)
{
    size_t shift_count = 0;
    if (isEven(number)) //짝수
        return (number + 1);
    else
    {
        while(++shift_count)
            if (isEven(number >> shift_count))
                break;
        return (number + pow(2,shift_count - 1));
    }
}

long long* solution(long long numbers[], size_t numbers_len) {
    long long* answer = (long long*)malloc(sizeof(long long) * numbers_len);
    for (size_t index = 0; index < numbers_len; ++index)
    {
        answer[index] = findAnswer(numbers[index]);
    }
    return answer;
}