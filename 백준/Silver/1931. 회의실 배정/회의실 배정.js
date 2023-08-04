let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = parseInt(input[0]);

let arr = []
for(let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number))
}
arr.sort((a,b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
})

let cnt = 1;
let index = 0;

for(let i = 1; i < arr.length; i++) {
  if(arr[index][1] <= arr[i][0]) {
    index = i
    cnt++
  }
}
console.log(cnt)