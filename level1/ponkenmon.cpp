#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> nums)
{
	int half = nums.size() / 2;

	sort(nums.begin(), nums.end());
	unique(nums.begin(), nums.end());
	return (nums.size() > half ? half : nums.size());
}
