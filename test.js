"use strict";
// console.log('Hello world');
// let age : number = 20;
// let boom : number = 49;
// let coom : number = 30;
// if (age<50)
//     age+=10;
// console.log(age);
//setion 2
// JavaScript     typeScript
// number          any
// string          unknown
//boolean          never
// null            enum
//undefined        tuple
//object
// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// let level;
// level = 1;
// level = 'a';
// function render(document:any)
// {
//     console.log(document);
// }
// let numbers: (string|number)[] = [1,2,'3'];
// numbers.forEach(n => n.toString)
//Tuples
// let user1 : [number, string][] = [[1,'Mosh'],[2,'Avi']];
// let user : [number, string] = [1,'Mosh'];
//user[1].
//Enums
// const enum Size {
//     Small=1,Medium =2 , Large=3
// };
// let mySize:Size = Size.Medium;
// console.log(mySize);
// functions
function calculateTax(income = 20000) {
    if (income > 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000));
//# sourceMappingURL=test.js.map