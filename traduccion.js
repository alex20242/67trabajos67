let matriz = [//dimensionar 
    [10, 20]//valores de la primera fila 
    [30, 40]//valores de la segunda fila
];

console.log("--- Matriz 2x2 ---");//titulo  
for (let i = 0; i < matriz,length; i++)  {//para, let es igual a variable numerica, matriz, length es equivalente a hasta y la ultima variable es
    let FilaTexto= "";//el espacio que hace que las matrises queden diferenciadas
    for (let j = 0; j < matriz [i].length; j++) {//let es igual a variable numerica, matriz [i] lenght es equivalente a hasta (puesto el i por s)
        FilaTexto+= matriz[i][j] + "  ";//esto seria lo mismo q escribir matriz[fila,columna]"  "sin saltar
    }
    console.log(FilaTexto);//esto escribe la matriz
}