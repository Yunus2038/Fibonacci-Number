const number = prompt('Enter the number of terms: ');
let num1 = 0;
let num2 = 1;
let result;
for (let i = 1; i <= number; i++) {
    console.log(num1);
    result = num1 + num2;
    num1 = num2;
    num2 = result;
}
