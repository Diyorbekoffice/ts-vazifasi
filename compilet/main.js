"use strict";
// Person turidagi ob'ekt
const person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
};
// Book turidagi ob'ekt
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};
//   2.massivlar
// number massiv
const numbers = [1, 2, 3, 4, 5];
// Yig‘indi hisoblash funksiyasi
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// string massiv
const fruits = ["apple", "banana", "cherry"];
// Katta harf bilan qaytaruvchi funksiya
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);
const studentRecord = ["Alice", 22, true];
const coordinate = [10, 20];
// 4.any
// any turidagi o‘zgaruvchi
let anyVariable = "Hello";
anyVariable = 42; // o‘zgaradi
anyVariable = true; // yana o‘zgaradi
// any turidagi massiv
let anyArray = ["text", 1, true];
anyArray.forEach(item => console.log(item));
// 5.unknown
// unknown turidagi o‘zgaruvchi
let unknownVar = "Some text";
unknownVar = 100;
// unknown qiymatini tekshirish va string ga o‘zgartirish
function convertToString(value) {
    if (typeof value === "string") {
        return value;
    }
    else {
        return String(value);
    }
}
console.log(convertToString(unknownVar)); // "100"
// 6.Funksiyalar
// addNumbers funksiyasi
function addNumbers(a, b) {
    return a + b;
}
// formatDate funksiyasi
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
// 7.never
// Xatolik tashlaydigan funksiya
function throwError(message) {
    throw new Error(message);
}
// Abadiy davom etadigan funksiya
function infiniteLoop() {
    while (true) { }
}
//   8.enum
// DaysOfWeek enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Monday"] = "Monday";
    DaysOfWeek["Tuesday"] = "Tuesday";
    DaysOfWeek["Wednesday"] = "Wednesday";
    DaysOfWeek["Thursday"] = "Thursday";
    DaysOfWeek["Friday"] = "Friday";
    DaysOfWeek["Saturday"] = "Saturday";
    DaysOfWeek["Sunday"] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
// printDay funksiyasi
function printDay(day) {
    console.log(`Today is ${day}`);
}
printDay(DaysOfWeek.Monday);
// Car turidagi ob'ekt
const car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
};
// PersonWithAddress turidagi ob'ekt
const personWithAddress = {
    name: "Mark",
    age: 28,
    isStudent: true,
    address: {
        street: "Main St",
        city: "Springfield",
        postalCode: "12345",
    },
};
// getStudentSummary funksiyasi
function getStudentSummary(student) {
    const averageGrade = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
    return `${student.name}, ${student.age} years old, Average grade: ${averageGrade}`;
}
//   13.Enum, Type Alias va Intersectionni Aralashtirib Ishlash
// OrderStatus enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
// CustomerOrder turidagi ob'ekt
const customerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.00,
    customerId: 789,
    name: "Sarah",
};
