/* Ejercicio 4: Bucles
Escribe un programa que imprima los números del 1 al 10 utilizando un bucle for.
Escribe un programa que imprima los números del 10 al 1 utilizando un bucle while.
Escribe un programa que imprima los primeros 10 números pares utilizando un bucle do...while. */


for (let i=0; i<=10; i++){
    console.log(i);
}

console.log("siguiente ejercicio")

let i=10;
while(i>0){
    console.log(i);
    i--;
}

console.log("siguiente ejercicio")

do{
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}
while(i <= 10);