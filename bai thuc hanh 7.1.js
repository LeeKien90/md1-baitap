// let a = 1
// let b = 2
// let c = 3
// let d = 0
// debugger
// for (let i = 0; i < 6; i++){
//     console.log('gia tri i:', i)
//     d+= i
// }
// //
// function sk1() {
//     let sukien = document.getElementById('sukien');
//     sukien.style.color = 'blue'
// }
//
// addEventListener("click", sk1)


// let i = 10;
// let f = 20.5;
// let b = true;
// let s = "Hà Nội";

// document.write('i = ' +i);
// document.write('<br>');
// document.write('f = ' +f);
// document.write('<br>')
// document.write('b = ' +b);
// document.write('<br>')
// document.write('s = ' +s);
// document.write('<br>')
//
// document.write(`i = ${i}$ f = ${f} b = ${b} s = ${s}`)
//
// //tính diện tích hình chữ nhật
//
// let width = 20; //Chiều cao
// let height = 10; //Chiều rộng
// let dienTich = width*height
// console.log(dientich)

//xem a có chia hết cho b không
let a = prompt();
let b = prompt();

if (a % b === 0) {
    alert(`${a} chia hết cho ${b}`)
} else {
    alert(`${a} không chia hết cho ${b}`)
}