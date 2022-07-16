class Solution(object):
    def twoSum(self, nums, target):
        # declaration of the dictionary
        seen = {}
        for i in range(0, len(nums)):
            value = nums[i]
            remaining = target - value
            # we find the remaining element in the dictionary
            if remaining in seen:
                return [i, seen[remaining]]
            # we add nums[i] as the key and its index as the value in the dictionary
            seen[value]=i
