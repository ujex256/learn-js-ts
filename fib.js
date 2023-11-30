const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
};

for (let i = 1; i < 41; i++) {
  console.log(fibonacci(i));
}
