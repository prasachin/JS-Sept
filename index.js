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

// let obj = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
//   password: "123456",
// };

// console.log(obj);
// obj.password = "new password";
// delete obj.password;
// console.log(obj);

// function parent(){ // scope x

//     let a = 10;

//     function child(){
//         console.log(a);
//     }
// }

// let obj = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
// };
// obj.password = "123456";
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Object.defineProperty(obj, "password", {
//   value: "123456",
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// console.log(obj);
// // console.log(Object.keys(obj));
// // obj.password = "new password";
// delete obj.password;
// console.log(obj);

// let obj = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
//   password: "123456",
// };

// // Object.freeze(obj);
// Object.seal(obj);

// console.log(obj);
// obj.address = "new password";
// // delete obj.password;
// // obj.newprop = "new prop";
// console.log(obj);

// let obj = {};
// let animal = { hasForLegs: true };

// let dog = Object.create(animal);
// dog.name = "tommy";
// dog.canBark = "yes";

// // console.log(Object.getPrototypeOf(dog));
// console.log(dog);

// let parent  = {x:10};

// let child = Object.create(parent);

// // console.log(child.x);
// child.x = 20;
// // console.log(parent.x);
// console.log(child.x);
// let json = {};

// json.name = "sachin";
// console.log(json);

// let payload = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
// };
// console.log(typeof payload);
// let jsnStr = JSON.stringify(payload);

// // console.log(typeof jsnStr);
// console.log(jsnStr);
// let requestBody = JSON.parse(jsnStr);
// console.log(requestBody.address);

// let payload = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
// };

// let payload2 = Object.create(payload);
// payload2.class = "9th";

// // console.log(payload2.name);
// // console.log(payload2.class);

// let jsnstr = JSON.stringify(payload2);
// console.log(jsnstr);

// let req = JSON.parse(jsnstr);
// console.log(req.name);
// console.log(req.class);
// let payload = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
// };

// Object.defineProperty(payload, "password", {
//   value: "123456",
//   writable: true,
//   enumerable: false,
//   configurable: true,
// });
// console.log(payload.password);
// let jsnstr = JSON.stringify(payload);
// console.log(jsnstr);

// let req = JSON.parse(jsnstr);
// console.log(req.password);
// let payload = {
//   name: "sachin",
//   age: 30,
//   address: { city: "pune", state: "MH" },
//   greet: function () {
//     console.log("Hello");
//   },
//   intro: undefined,
// };

// // payload.greet()
// console.log(payload);
// let jsnstr = JSON.stringify(payload);
// console.log(jsnstr);
// let req = JSON.parse(jsnstr);
// console.log(req);

// let obj = {};
// obj.self = obj;

// console.log(obj);
// let jsnstr = JSON.stringify(obj);
// console.log(jsnstr);

// let el = document.getElementById("title");
// console.log(el);

// let els = document.getElementsByClassName("listElement");
// console.log(els);
// els.forEach((ele) => {
//   console.log(ele);
// });

// let els = document.getElementsByTagName("li");
// console.log(els);

// let ele = document.querySelector(".listElement");
// console.log(ele);

// let ele = document.querySelectorAll(".listElement");
// // console.log(ele);
// ele.forEach((ele) => {
//   console.log(ele);
// });


// let ele = document.getElementById("title");
// console.log(ele.textContent);
// ele.textContent = "I am a new title";
// console.log(ele.textContent);

// ele.innerHTML = "<h1>I am a new title</h1>";
// ele.textContent = "I am a new title";
