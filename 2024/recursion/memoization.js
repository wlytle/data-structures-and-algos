function fibonacci(n) {

    return fibWithMemo(n , {})
}

function fibWithMemo(n, memo) {
    if (n === 1 || n === 2) {
        return 1;
    }

    if (memo[n]) {
        return memo[n];
    }

    const fibOfN = fibonacci(n - 1) + fibonacci(n - 2)
    memo[n] = fibOfN;
    return fibOfN;
}

// console.log(fibonacci(1));

/*
Power Function: 
Implement a function to calculate X^N. Both X and N can be positive or negative. You can assume that overflow doesn't happen.
(Try doing it in ​O(log(N))​ time)
For example: 2 ^ 2  = 4 
2 ^ -2 = 0.25
-2 ^ 3  = -8

Questions to Clarify: 
Q. Are both X and N integers?
A. Yes 
Q. Can the number be both negative and positive? 
A. YesQ. Can the power be negative ? A. Yes 
Q. Can we assume that the result won't overflow? 
A. Yes, you can assume that.Q. 0​0​ or 0​-3 ​(or any negative number) is undefined. How do we return that?
A. Throw an exception
*/

// function power(base, exp) {
//     if (base === 0 && exp < 0) {
//         throw Error("invalid inputs nerd!");
//     }

//     const result = positivePower(Math.abs(base), Math.abs(exp))

//     if (exp < 0) {
//         return 1 / result;
//     }
//     if (base < 0 && exp % 2 !== 0) {
//         return result * -1;
//     }
//     return result;
// }

// function positivePower(base, exp) {
//     if (exp === 0) {
//         return 1;
//     }
//     if (exp === 1) {
//         return base;
//     }

//     const halfPower = positivePower(base, Math.floor(exp/2));
    
//     if (exp % 2 === 0) {
//         return halfPower * halfPower
//     } else {
//         return halfPower * halfPower * base;
//     }
// }

function power(base, exp) {
    if (base === 0 && exp < 0) {
        throw Error("Bad inputs nerd!");
    }

    let result = positivePower(Math.abs(base), Math.abs(exp));

    if (base < 0 && exp % 2 !== 0) {
        result *= -1
    }
    if (exp < 0) {
        result = 1 / result;
    }

    return result;
}

function positivePower(base, exp) {
    if (exp === 1) {
        return base;
    }
    if (exp === 0) {
        return 1;
    }

    const halfPower = positivePower(base, Math.floor(exp / 2));

    if (exp % 2 === 0) {
        return halfPower * halfPower;
    }
    return halfPower * halfPower * base;
}

console.log(power(2,2));
// 4
console.log(power(2,-2));
// 0.25
console.log(power(-2,3));
// -8
console.log(power(-2,-3));
// -0.125