alert("  1-ADD  " + "  2-SUBTRACT  " + "  3-MULTIPLY  " + "  4-DIVIDE");
console.log("  1-ADD  " + "  2-SUBTRACT  " + "  3-MULTIPLY  " + "  4-DIVIDE");
let user = prompt("Enter your choice");
user = parseInt(user);
switch (user) {
  case 1:
    let num1 = prompt("Enter First Number");
    let num2 = prompt("Enter Second Number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    alert("Addition is  " + (num3 + num4));
    console.log("Addition is  " + (num3 + num4));
    break;
  case 2:
    let num3 = prompt("Enter First Number");
    let num4 = prompt("Enter Second Number");
    num3 = parseInt(num3);
    num4 = parseInt(num4);
    alert("Subtraction is  " + (num3 - num4));
    console.log("Subtraction is  " + (num3 - num4));
    break;
  case 3:
    let num5 = prompt("Enter First Number");
    let num6 = prompt("Enter Second Number");
    num5 = parseInt(num5);
    num6 = parseInt(num6);
    alert("Multiplication is  " + num5 * num6);
    console.log("Multiplication is  " + num5 * num6);
    break;
  case 4:
    let num7 = prompt("Enter First Number");
    let num8 = prompt("Enter Second Number");
    num7 = parseInt(num7);
    num8 = parseInt(num8);
    alert("Division is  " + num7 / num8);
    console.log("Division is  " + num7 / num8);
    break;
  default:
    alert("Inavalid Choice");
    console.log("Invalid Choice");
}
