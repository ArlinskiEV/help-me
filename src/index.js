module.exports = function count(s, pairs) {
  // your implementation
  let answer = 0;
  // pairs = [[prime, pow],...];
  let mul = [...pairs].sort((a,b) => a[0] - b[0]);

  //-----------------------------
  // advanced zero ?
  //-----------------------------

  // evil time
  function testK(k) {
    let memory = {};
    let commonDivisor = (num) => {
      if (!memory.num) {
        memory.num = mul.some((item) => (num % item[0] === 0));
      }
      return memory.num;
    };
    return Array.prototype.every.call(s, (item, index) => (commonDivisor(k + index) == (item === '0')));
  };

  let n = mul.reduce((prev, item) => prev * Math.pow(item[0], item[1]), 1);
  console.log('n=' + n);
  for (let i = 0; i <= n; i++) {
    if (testK(i)) {
      answer += 1;
      // console.log(`i=${i}`);
    }
  };

  console.log('answer=' + answer);
  const result = answer % 1000000007;
  return result;
}

// -------------------
// count('1', [[2, 1], [3, 1]]);
// assert.equal(result, 2);
// N = 6
// NOD(k + 0, N) == 1
// k = 0/1/2/3/4/5/6
// nod=-/1/2/3/4/1/6
// 1, 5 => 2
// -------------------
// count('0', [[3, 1], [2, 1]]);
// assert.equal(result, 4);
// N = 6
// NOD(k + 0, N) != 1
// k = 0/1/2/3/4/5/6
// nod=-/1/2/3/4/1/6
// 2, 3, 4, 6 => 4
// -------------------
// count('01', [[3, 3]]);
// assert.equal(result, 9);
// N = 27
// NOD(k + 0, N) != 1
// NOD(k + 1, N) == 1
// k = 0/1/2/3/4/5/6/7/8/9-/10/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26/27
// nod=-/1/1/3/1/1/3/1/1/9-/1-/1-/3-/1-/1-/3-/1-/1-/9-/1-/1-/3-/1-/1-/3-/1-/1-/27
// k+1=1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26/27/28
// nod=1/1/3/1/1/3/1/1/9/1-/1-/3-/1-/1-/3-/1-/1-/9-/1-/1-/3-/1-/1-/3-/1-/1-/27/1-
// 3,6,9,12,15,18,21,24,27 => 9
//вычисление NOD до N+s.length, со сдвигами..



// -------------------
// count('01', [[3, 2], [5, 1]]);
// assert.equal(result, 15);
// N = 45
// NOD(k + 0, N) != 1
// NOD(k + 1, N) == 1
// k =
//      0 1 2 3 4 5 6 7 8 9   10 
//NOD   - 1 1 3 1 5 3 1 1 3   5   
//k+1=
//      1 2 3 4 5 6 7 8 9 10  11
//NOD   - 
