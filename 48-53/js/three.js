let start = 1;
let end = 6;
let breaker = 2;

// code

for (let i = start; i <= end; i++) {
  // console.log(`${i}\n -- ${breaker}\n -- ${breaker**breaker}`);
  console.log(i);
  console.log(`-- ${breaker}`);
  console.log(`-- ${end - breaker}`);
}

// Output
/*1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4*/