let num = [5,7,4,6,8,9,14]
/*console.log(num)
num[3] = 8
console.log(num)
num.push(9)
console.log(num)
console.log(num.length)
console.log(num.sort())*/

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
    
}

for(let i in num){
    console.log(`Teste ${num[i]}`)
}

console.log(num.indexOf(7))