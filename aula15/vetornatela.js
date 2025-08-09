let valores = [8, 7, 1, 4, 2, 6]
/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}