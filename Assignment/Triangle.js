/* 
Triangle Type
Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.
*/

function triangleType(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
        return "Invalid triangle!";
    }


    if (a === b && b === c) {
        return "Equilateral triangle";
    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

console.log(triangleType(3, 3, 3)); 
console.log(triangleType(4, 4, 7)); 
console.log(triangleType(5, 6, 7)); 