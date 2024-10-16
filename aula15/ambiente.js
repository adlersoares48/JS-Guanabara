let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for(var pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
let pos1 = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos1}`)
let pos2 = num.indexOf(4)
console.log(`O valor 8 está na posição ${pos2}`)