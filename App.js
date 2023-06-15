// Core Module
// 1. File System (fs)
const fs = require("fs");
const readLine = require("readline");

// Menuliskan String Ke dalam File Secara Syncronous
// try {
//   fs.writeFileSync("Data/Syncronous.txt", "Hello World Secara Syncronous");
// } catch (e) {
//   console.log(e);
// }
// Menuliskan String Ke dalam File Secara Syncronous

// Menuliskan String Ke dalam File Secara Asyncronous
// fs.writeFile("Data/Asyncronous.txt", "Hello World Secara Asyncronous", (e) => {
//   console.log(e);
// });
// Menuliskan String Ke dalam File Secara Asyncronous

// Membaca File Secara Syncronous
// const syncronous = fs.readFileSync("Data/Syncronous.txt", "utf-8");
// Dibaca menjadi Buffer sebelum ditambahkan "utf-8"
// console.log(syncronous);
// Dibaca menjadi Buffer sebelum ditambahkan "utf-8"
// Membaca File Secara Syncronous

// Membaca File Secara Asyncronous
// const asyncronous = fs.readFile(
//   "Data/Asyncronous.txt",
//   "utf-8",
//   (e, callback) => {
//     if (e) throw e;
//     console.log(callback);
//   }
// );
// Membaca File Secara Asyncronous

// Membaca Baris File Secara Asyncronous
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdin,
});

rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Masukkan umur anda : ", (nohp) => {
    // console.log(`Terimakasih ${nama}, anda berumur ${nohp}`);
    const contact = { nama, nohp };
    const file = fs.readFileSync("Data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync("Data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data");
    rl.close();
  });
});
// Membaca Baris File Secara Asyncronous
