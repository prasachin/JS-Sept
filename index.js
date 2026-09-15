// let a = 10;
// console.log(a);

// var a = 10;
// var b = 20;
// function add(x, y) {
//   var sum = x + y;
//   console.log(a);
//   return sum;
// }

// var result = add(a, b);

// console.log(result);

// console.log(a);

// let a = 10;
// var b = 20;

// var res = add(a, b);
// console.log(res);

// function add(x, y) {
//   var sum = x + y;
//   //   console.log(a);
//   return sum;
// }
//
// console.log(x);
// var a ;
// const b;
// let c;
// // Number, Array, Object, String, Boolean, Null, Undefined, Symbol, Set, Map, Date,
// // let s = new Date();

// console.log(c);

// let a = 10;

// let b = a;

// b = 20;

// console.log(a);
// console.log(b);

// let a = { x: 10 }; // (xyzhbg_a): {x:20}

// let b = a; // (xyzhbg_a)

// b.x = 20;

// console.log(a.x);//(xyzhbg_a)
// console.log(b.x);//(xyzhbg_a)

// let a = [];

// console.log(typeof a);

// console.log(Array.isArray(a));

// if(Array.isArray(a)) {}

// function Array(x) {
//   //   let v = [];
//   //   v.push(1);
//   //   v.push(2);
//   //   return v;
//   this.a = x;
// }

// let a = new Array(10);

// // console.log(Array.isArray(a));
// console.log(a.a);

// let a = new Array(10);

// console.log(a.length);

// let a = [1, 2, 3, 4, 5];

// console.log(a);
// a.push(20); O(1)
// console.log(a);

// console.log(a);
// a.unshift(20); O(n)
// console.log(a);

// console.log(a);
// a.pop(); // O(1);
// console.log(a);

// console.log(a);
// a.shift(); //O(n)
// console.log(a);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let b = a.slice(-2); // O(n)

// // console.log(a);
// console.log(b);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let b = a.splice(3,2, 10, 20 , 30);

// console.log(a);
// console.log(b);

// let a = [1, 22, 4, 50, 9, 10];

// let c = ["1", "22", "4", "50", "9", "10"];
// console.log(a);
// let b = a.sort((x, y) => {
//   return y - x;
// });

// console.log(a);

// let a = [
//   [1, 2, 3, 4],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(a[0][0]);

// let a = [1, 22, 4, 50, 9, 10];

// for(let i = 0; i<a.length; i++) {
//     console.log(a[i]);
// }

// let i = 0;

// while(i<a.length) {
//     console.log(a[i]);
//     i++;
// }

// do {
//   console.log(a[i]);
//   i++;
// } while (i < a.length);

// let a = [1, 22, 4, 50, 9, 10];

// function callMe(v, i) {
//   //   console.log("I am called at index: ", i, " with value: ", v);
//   //   return i;
//   //   if (v === 50) {
//   //     return v;
//   //   }
//   //   return true;
// //   return v % 2 === 0;
// }
// let a = [1, 22, 4, 50, 9, 10];
// function callMe(prev, curr, i) {
//   console.log("I am called at index: ", i, " with value: ", v);
//   return i;
//   if (v === 50) {
//     return v;
//   }
//   return true;
//   return v % 2 === 0;
//   return prev + curr;
// }

// let resForech = a.forEach(callMe);
// console.log(a);
// let reMap = a.map(callMe);

// console.log(a);
// console.log(reMap);

// console.log(a);
// console.log(resForech);

// let resFilter = a.filter(callMe);

// console.log(a);
// console.log(resFilter);

// let resReduce = a.reduce(callMe, 10);

// console.log(resReduce);
// let str = "i am a string";
// let str1 = 'i am a string';
// let str2 = new String("I am a string");

// let str4 = "STRING";

// let str3 = `I am a string ${str4}`;
// console.log(typeof str3);
// console.log(str3);

// let str = "sachin";

// str[0] = "S";
// str = str[0].toUpperCase() + str.slice(1, 4);

// console.log(str[0]);
// let st = str.slice(-3, -2);
// console.log(st);

// console.log(str.length)
// let st = str.substring(1, 4);
// console.log(st);

// let str = "sachinach";

// let st = "ach";

// // console.log(str.includes(st));
// console.log(str.indexOf(st, 2));

// let str = "i am a string";
// let words = str.split(" ");
// // console.log(words);
// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   word = word[0].toUpperCase() + word.slice(1);
//   words[i] = word;
// //   console.log(word);
// }

// console.log(words.join(" "));
// let emoji = "🚜";
// let char = "a";

// console.log(typeof emoji);
// console.log(char.length);
// console.log(emoji.length);

// let obj = { name: "sachin", age: 30, address: { city: "pune", state: "MH" } };

// let obj = new Object();
// console.log(typeof obj.name);
// console.log(obj);
// function User(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;
// }

// class User {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
// }

// let user1 = new User("sachin", 30, { city: "pune", state: "MH" });
// let user2 = new User("rahul", 25, { city: "mumbai", state: "MH" });

// console.log(user1);
// console.log(user2);


// let obj = { name: "sachin", age: 30, address: { city: "pune", state: "MH" } };

// console.log(obj.address);
// console.log(obj["address"]);
// console.log(Object.keys(obj)); 
// obj.password = "123456";
// console.log(obj);
// delete obj.password;
// console.log(obj);

// let obj1 = obj;

// console.log(obj1.name);
// obj1.name = "rahul";
// console.log(obj1.name);
// console.log(obj.name);

let obj = { name: "sachin", age: 30, address: { city: "pune", state: "MH" } };