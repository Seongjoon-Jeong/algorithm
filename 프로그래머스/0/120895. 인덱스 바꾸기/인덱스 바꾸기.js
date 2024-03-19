const solution = (str, num1, num2) => {
    if (num1 < num2) {
        return str.slice(0, num1) + str[num2] + str.slice(num1 + 1, num2) + str[num1] + str.slice(num2 + 1);
    } else {
        return str.slice(0, num2) + str[num1] + str.slice(num2 + 1, num1) + str[num2] + str.slice(num1 + 1);
    }
}