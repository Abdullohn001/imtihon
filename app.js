// 2 variant


//1 - masala
// function nom(fileNomi) {
//   const str = fileNomi.lastIndexOf("/");
//   const file = fileNomi.substring(str + 1);

//   const fileindex = file.lastIndexOf(".");
//   const fileNameWithoutExtension = file.substring(0, fileindex);

//   return fileNameWithoutExtension;
// }

// const fileNomi = "D:/Qudrat_c++/books/My_book.exe";
// const natija = nom(fileNomi);
// console.log(natija);

// 2- masala 
// function getSum3(n) {
//   let all = 0;
//   for (let i = 3; i <= n; i += 3) {
//     all += i;
//   }
//   return all;
// }
// console.log(getSum3(15));


// 3-masala
// function number(n) {
//   let sum = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// const n = 5;
// const result = number(n);
// console.log(result);

// 4-masala

// function massiv(stringArray) {
//   const lengthObject = {};

//   for (let i = 0; i < stringArray.length; i++) {
//     const string = stringArray[i];
//     lengthObject[string] = string.length;
//   }

//   return lengthObject;
// }

// const strings = ["Abdulaziz", "Safarmurad", "Orol", "Jahongir"];
// const resultObject = massiv(strings);

// console.log(resultObject);

// 5-masala

// function getMultipleValues(n, obj) {
//   const result = {};

//   for (const kalit in obj) {
//     if (obj.son(kalit)) {
//       result[kalit] = obj[kalit] * n;
//     }
//   }

//   return result;
// }

// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// const result = getMultipleValues(n, obj);
// console.log(result);

// 6-masala
// function kichikKatta(massiv) {
//   if (massiv.length == 0) {
//     return [0];
//   }

//   let kichigi = massiv[0];
//   let kattasi = massiv[0];

//   for (let i = 1; i < massiv.length; i++) {
//     if (massiv[i] < kichigi) {
//       engKichiksi = massiv[i];
//     }
//     if (massiv[i] > kattasi) {
//       kattasi = massiv[i];
//     }
//   }

//   return [kichigi, kattasi];
// }

// let [kichik, katta] = kichikKatta(massiv);

// console.log(kichik);
// console.log(katta);

// 7-masala


// 8-masala 
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// function saralov(nem, prot, yiqilgan){
//     if (nem[protcent] > 60){
//         prot +1;
//     }else{
//         yiqilgan + 1;
//     }
//     return nem
// }
// console.log(saralov(pupils))

// 9-masala
// function son(arr) {
//   return arr.reduce(
//     (acc, current) => {
//       if (!acc.includes(current)) {
//         acc.push(current);
//       }
//       return acc;
//     },
//     [arr[0]]
//   );
// }

// const array = [1, 2, 2, 3, 4, 4, 5, 5, 5];
// const result = son(array);
// console.log(result);

// 10-masala
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// function son(arr) {
//   return arr.reduce(
//     (acc, current) => {
//       if (!acc.includes(current)) {
//         acc.push(current);
//       }
//       return acc;
//     },
//     [arr[0]]
//   );
// }

// const result = son(animals);
// console.log(result);
