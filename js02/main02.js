import num from './sub01';
import $ from 'jquery';
// 기본방법

// import {ram,color} from './sub02';
// 이름 바꾸기
// import {ram,color:red} from './sub02';
// as로 바꾸기
import * as main from './sub02';


$(function(){
    $('body').css('background-color','yellow');
})
// console.log(ram(100));
// console.log(color.name);
console.log(main);
console.log(main.color.name);
console.log(main.ram(20));
console.log(main.default);

num('export javascript');