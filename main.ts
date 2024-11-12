// 1. obyektlar
// Person interfeysi
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  
  // Person turidagi ob'ekt
  const person: Person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
  };
  
  // Book interfeysi
  interface Book {
    title: string;
    author: string;
    publishedYear: number;
  }
  
  // Book turidagi ob'ekt
  const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  };


//   2.massivlar
// number massiv
const numbers: number[] = [1, 2, 3, 4, 5];

// Yig‘indi hisoblash funksiyasi
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 

// string massiv
const fruits: string[] = ["apple", "banana", "cherry"];

// Katta harf bilan qaytaruvchi funksiya
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);


// 3.tupe
// StudentRecord tuple
type StudentRecord = [string, number, boolean];
const studentRecord: StudentRecord = ["Alice", 22, true];

// Coordinate tuple
type Coordinate = [number, number];
const coordinate: Coordinate = [10, 20];


// 4.any
// any turidagi o‘zgaruvchi
let anyVariable: any = "Hello";
anyVariable = 42; // o‘zgaradi
anyVariable = true; // yana o‘zgaradi

// any turidagi massiv
let anyArray: any[] = ["text", 1, true];
anyArray.forEach(item => console.log(item));


// 5.unknown
// unknown turidagi o‘zgaruvchi
let unknownVar: unknown = "Some text";
unknownVar = 100;

// unknown qiymatini tekshirish va string ga o‘zgartirish
function convertToString(value: unknown): string {
  if (typeof value === "string") {
    return value;
  } else {
    return String(value);
  }
}
console.log(convertToString(unknownVar)); // "100"


// 6.Funksiyalar
// addNumbers funksiyasi
function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  // formatDate funksiyasi
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  
// 7.never
// Xatolik tashlaydigan funksiya
function throwError(message: string): never {
    throw new Error(message);
  }
  
  // Abadiy davom etadigan funksiya
  function infiniteLoop(): never {
    while (true) {}
  }

  
//   8.enum
// DaysOfWeek enum
enum DaysOfWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
  }
  
  // printDay funksiyasi
  function printDay(day: DaysOfWeek): void {
    console.log(`Today is ${day}`);
  }
  
  printDay(DaysOfWeek.Monday);

  
//   9.Intersection
// Person interfeysi
interface Person {
    name: string;
    age: number;
  }
  
  // Employee interfeysi
  interface Employee {
    employeeId: number;
    department: string;
  }
  


//   10.Interfeyslar
// Vehicle interfeysi
interface Vehicle {
    make: string;
    model: string;
    year: number;
  }
  
  // Car interfeysi, Vehicle interfeysini kengaytirish
  interface Car extends Vehicle {
    numberOfDoors: number;
    isElectric: boolean;
  }
  
  // Car turidagi ob'ekt
  const car: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
  };

  
//   11.type alias
// Address type alias
type Address = {
    street: string;
    city: string;
    postalCode: string;
  };
  
  // PersonWithAddress type alias
  type PersonWithAddress = Person & {
    address: Address;
  };
  
  // PersonWithAddress turidagi ob'ekt
  const personWithAddress: PersonWithAddress = {
    name: "Mark",
    age: 28,
    isStudent: true,
    address: {
      street: "Main St",
      city: "Springfield",
      postalCode: "12345",
    },
  };



//   12. Obyekt, Funksiya va Tupleni Aralashtirib Ishlash

  // Student interfeysi
interface Student {
    name: string;
    age: number;
    grades: number[];
    address: [string, number];
  }
  
  // getStudentSummary funksiyasi
  function getStudentSummary(student: Student): string {
    const averageGrade = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
    return `${student.name}, ${student.age} years old, Average grade: ${averageGrade}`;
  }
  

  
//   13.Enum, Type Alias va Intersectionni Aralashtirib Ishlash
// OrderStatus enum
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled",
  }
  
  // Order interfeysi
  interface Order {
    orderId: number;
    status: OrderStatus;
    totalAmount: number;
  }
  
  // Customer interfeysi
  interface Customer {
    customerId: number;
    name: string;
  }
  
  // CustomerOrder intersection tipi
  type CustomerOrder = Order & Customer;
  
  // CustomerOrder turidagi ob'ekt
  const customerOrder: CustomerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.00,
    customerId: 789,
    name: "Sarah",
  };
  



  