let nums = [2, 7, 8, 1, 3, 10, 5, 4, 6, 9];
print(nums);

nums.sort((current, next) => {
  if (odd(current) && even(next)) return -1;
  if (odd(next) && even(current)) return 1;

  if (current > next) return 1;
  if (current < next) return -1;
  return 0;
});

print(nums);
