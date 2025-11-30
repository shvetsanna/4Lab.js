 'use strict';

//---------------------------------------------
// 1. Робота з циклами (5 різних видів)
//---------------------------------------------

// For — сума квадратів
const sumSquares = (...nums) => {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res += nums[i] ** 2;
    }
    return res;
};

const a = sumSquares(1, 2, 3);   // 14
const b = sumSquares(-2, 2);     // 8
const c = sumSquares();          // 0

console.log("sumSquares:", a, b, c);


//------------------------------------------------
// For...of — добуток чисел
const multiply = (...nums) => {
    if (nums.length === 0) return 0;
    let p = 1;
    for (const n of nums) {
        p *= n;
    }
    return p;
};

const d = multiply(2, 3, 4);   // 24
const e = multiply(5);         // 5

console.log("multiply:", d, e);


//------------------------------------------------
// While — рахуємо скільки чисел більші за 10
const countMore10 = (...nums) => {
    let i = 0;
    let k = 0;
    while (i < nums.length) {
        if (nums[i] > 10) k++;
        i++;
    }
    return k;
};

const f = countMore10(5, 11, 50, 9); // 2

console.log("countMore10:", f);


//------------------------------------------------
// Do...while — середнє значення
const average = (...nums) => {
    if (nums.length === 0) return 0;

    let i = 0;
    let sum = 0;

    do {
        sum += nums[i];
        i++;
    } while (i < nums.length);

    return sum / nums.length;
};

const g = average(10, 20, 30);   // 20

console.log("average:", g);


//------------------------------------------------
// Reduce — сума модулів
const sumAbs = (...nums) => 
    nums.reduce((acc, x) => acc + Math.abs(x), 0);

const h = sumAbs(-10, 5, -3);    // 18

console.log("sumAbs:", h);


//---------------------------------------------
// 2. Пошук мінімального елемента в матриці
//---------------------------------------------

const findMin = (matrix) => {
    let min = Infinity;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
        }
    }

    return min;
};

const m = findMin([
    [4, 2, -1],
    [7, 9, 0],
    [5, -3, 8]
]); // -3

console.log("findMin:", m);


//---------------------------------------------
// 3. Об’єкт: середній вік людей
//---------------------------------------------

const people = {
    tesla: { born: 1856, died: 1943 },
    curie: { born: 1867, died: 1934 },
    newton: { born: 1643, died: 1727 },
};

const averageAge = (obj) => {
    let total = 0;
    let count = 0;

    for (const key in obj) {
        total += obj[key].died - obj[key].born;
        count++;
    }

    return total / count;
};

const avg = averageAge(people); // ≈ 76.6

console.log("averageAge:", avg);


//---------------------------------------------
// 4. Інтегрування методом ТРАПЕЦІЙ
//---------------------------------------------

// Формула:
// I ≈ h * ( (f(a)+f(b))/2 + Σ f(x_i) )

const integrate = (f, a, b, n = 5000) => {
    const h = (b - a) / n;
    let S = (f(a) + f(b)) / 2;

    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        S += f(x);
    }

    return S * h;
};

const I = integrate(Math.sin, 0, Math.PI);  // ≈ 2

console.log("integral:", I);

//---------------------------------------------