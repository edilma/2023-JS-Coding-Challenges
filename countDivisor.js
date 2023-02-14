function getDivisorsCnt(n) {
  const primes = [2, 3, 5, 7];
  const answer = [1, n];
  let div = [];
  if (primes.includes(n)) {
    return 2;
  } else {
    for (let i = 0; i < 3; i++) {
      let pos = n / primes[i];
      console.log(pos);
      if (n < primes[i] && pos === 0) {
        div.push(primes[i]);
      }
    }
  }
  if (div.length === 0) {
    return 2;
  } else {
    for (let i = 0; i < div.length - 1; i++) {
      for (let j = 1; j < div.length; j++) {
        let adiv = div[i] * div[j];
        answer.push(adiv);
      }
    }
    return answer.length;
  }
}

const number = 30;
console.log(getDivisorsCnt(30));

function getDivisorsCnt2(n) {
  const primes = [2, 3, 5, 7];
  i = 0;
  let divisors = [1];
  while (n >= primes[i] && i < 4) {
    if (n === primes[i]) {
      divisors.push(n);
      console.log("my new n is", n);
      break;
    } else {
      if (n % primes[i] === 0) {
        divisors.push(n);
        n = n / primes[i];
        getDivisorsCnt2(n);
        i++;
      } else {
        i++;
      }
    }
  }
  return divisors;
}

console.log(getDivisorsCnt2(30));
