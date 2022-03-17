const color = ['red','blue','green','orange'];
// 나머지 매개변수 : rest parameter
// function myColor(a,b,...c){
//     return{
//         a:a,
//         b:b,
//         c:c,
//     }
// }

// 1차 변형
// function myColor(a,b,...c){
//     return {a,b,c}
// }

// 2차 변형: 화살표함수
// const myColor = (a,b,...c)=>{return {a,b,c}}

// 3차 변형
const myColor = (a,b,...c) => ({a,b,c})

console.log(myColor(...color));