let matriz = [  //este es el inigio del algoritmo
    [10, 20], //aca ya estas predefinando la matrizes [0,0] y [0,1] 
    [30, 40] //aca ya estas predefinando la matrizes [1,0] y [1,1] 
    ];
    console.log("--- Matriz 2x2 ---"); //aca es como el escribir diciendo que guardo la matrizx
    for (let i = 0; i < matriz.length; i++)  {  1 //este es el "para" para la columna
    let filaTexto = ""; //esto es el escribir
    for (let j = 0; j < matriz[i].length; j++) {  //este es el "para" para la filas
    filaTexto += matriz[i][j] + " "; //esto es e el escribrir
    }
    console.log(filaTexto); //finalgortimo
    }