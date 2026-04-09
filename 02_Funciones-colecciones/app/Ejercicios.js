// map 
//ejercicio 1 =  Duplicar números con map 
//const values = [2,4,6,8,10];
//const duplicar = values.map((x) => x * 2);  //se pone la variable a convertir
//console.log(duplicar);

//ejercicio 2 = Convertir nombres a mayúsculas con map
//const nombres = ["ana", "luis", "marta", "pedro"]; 
//const mayusculas = nombres.map((x) => x.toUpperCase());
//console.log(mayusculas);

//ejercicio 3 =  Obtener longitudes de palabras con map 
//const palabras = ["sol", "computador", "mesa", "javascript"];
//const longitud = palabras.map((x) => x.length);
//console.log(longitud);

// filter 
//ejercicio 4 = Filtrar números pares con filter 
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //se pone la variable a filtrar    
//const pares = numeros.filter((x) => x % 2 === 0); //se filtra los numeros pares
//console.log(pares);

//ejercicio 5 = Filtrar palabras largas con filter 
//const palabras = ["casa", "ventana", "sol", "computadora", "luz"]; 
//const tamaño = palabras.filter((x) => x.length > 5 );
//console.log(tamaño);

//ejercicio 6 = Filtrar estudiantes aprobados con filter 
//const estudiantes = [ 
  //{ nombre: "Ana", nota: 4.5 }, 
  //{ nombre: "Luis", nota: 2.8 }, 
  //{ nombre: "Marta", nota: 3.7 }, 
  //{ nombre: "Carlos", nota: 2.5 } 
//];
//const aprobados = estudiantes.filter(nombre => nombre.nota > 3);
//console.log(aprobados);

// reduce
//ejercicio 7 = Sumar números con reduce
//const numeros = [5, 10, 15, 20]; //se pone la varialbe
//const suma = numeros.reduce((suma, numeros) => suma + numeros, 0); //el 0 de donde incia la suma
//console.log(suma);

//ejercicio 8 = Multiplicar todos los números con reduce
//const numeros = [2, 3, 4]; 
//const multiplicar = numeros.reduce ((numeros, multiplicar) => numeros * multiplicar, 1); //el 1 de donde inicia la multiplicación
//console.log(multiplicar);

//ejercicio 9 = Contar total de letras con reduce 
//const palabras = ["hola", "mundo", "js"];
//const numLetras = palabras.reduce((letras, suma) => letras + suma.length, 0);
//console.log(numLetras);

// sort  //sort ordena los elementos
//ejercicio 10 =  Ordenar números ascendentemente con sort   
//const numeros = [45, 12, 78, 3, 19, 1]; 
//numeros.sort((a, b) => a - b); //se ordena de menor a mayor
//console.log(numeros);

//ejercicio 11 =  Ordenar números descendentemente con sort 
//const numeros = [45, 12, 78, 3, 19, 1]; 
//numeros.sort((a, b) => b - a); //se ordena de mayor a menor
//console.log(numeros);

//ejercicio 12 =  Ordenar nombres alfabéticamente con sort 
//const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"]; 
//nombres.sort((a,b) => a.localeCompare(b));   //ordena alfabeticamente
//console.log(nombres);

//ejercicio 13 = Ordenar productos por precio con sort
//const productos = [ 
  //{ nombre: "Teclado", precio: 120000 }, 
  //{ nombre: "Mouse", precio: 50000 }, 
  //{ nombre: "Monitor", precio: 800000 }, 
  //{ nombre: "USB", precio: 30000 } 
//]; 
//productos.sort((a, b) => a.precio - b.precio); //se ordena de menor a mayor
//console.log(productos);

// switch  //switch es un control de flujo
//ejercicio 14 = Menú de día de la semana con switch    
//switch (1) { //se pone la variable a evaluar
    //case 1:
        //console.log("Lunes");
        //break;
    //case 2:
        //console.log("martes");
        //break;
    //case 3:
        //console.log("miércoles");
        //break;
    //case 4:
        //console.log("jueves");
        //break;
    //case 5:
        //console.log("viernes");
        //break;
    //case 6:
        //console.log("sábado");
        //break;
    //case 7:
        //console.log("domingo");
        //break;
    //default:
        //console.log("Día no válido");
        //break;
//}

//ejercicio 15 =  Clasificación de color con switch 
//switch ("azul") {
    //case "rojo":
        //console.log("Color de alerta");
        //break;
    //case "verde":
        //console.log("Color de avance");
        //break;
        //case "amarillo":
        //console.log("Color de precaución");
        //break;
    //default:
        //console.log("Color no reconocido");
        //break;
//}

// while  //while es un ciclo
//ejercicio 16 = Tabla del 5 con while
//let num = 5; //se pone la variable a multiplicar

//while (num <= 5) {     //se pone la condicion para que se rompa el ciclo
    //let i = 1;   //se pone la variable para multiplicar
    //while (i <= 10) {     //se pone la condicion para que se rompa el ciclo
        //console.log(num + " x " + i + " = " + (num * i));//se hace la multiplicación
        //i++; //inclementa el valor de i
    //}
    //num++; //ya no inclementa el valor pq la condicion es (num <= 5) y la variable es 5
//}

//ejercicio 17 = Contar del 10 al 1 con while
//let num = 10; //se pone la variable a contar
//while (num >= 1) {        //se pone la condicion para romper el ciclo
    //console.log(num);    //se imprime el valor de la variable
    //num--;        //disminuye el valor de la variable
    //}
    //console.log("¡Despegue!") 

//ejercicio 18 = Sumar números hasta llegar a 100 con while
//let num = 1; //se pone la variable a sumar
//while (num < 100) {//se pone la condicion para romper el ciclo
    //console.log(num + " + 1 = " + (num + 1)); //se suman los numeros hasta el 100
    //num++; //incrementa el valor de la variable
//}

//ejercicio 19 = Ejercicio combinado: filter + map 
//const numeros = [3, 8, 15, 20, 7, 12, 1, 30]; 
//const filtrados = numeros.filter((x) => x > 10); //se filtra los numeros mayores a 10
//const multiplicados = filtrados.map((x) => x * 2); //se multiplica los numeros pares por 2
//console.log(multiplicados);

//ejercicio 20 = Ejercicio integrador: filter + sort + map + reduce 
const ventas = [ 
  { producto: "Mouse", cantidad: 3, precio: 50000 }, 
  { producto: "Teclado", cantidad: 2, precio: 120000 }, 
  { producto: "Monitor", cantidad: 1, precio: 800000 }, 
  { producto: "USB", cantidad: 5, precio: 30000 },
]; 
const filtrados = ventas.filter((x) => x.cantidad >= 2); //se filtra los productos con cantidad mayor a 2
const ordenados = filtrados.sort((a, b) => b.precio - a.precio); //se ordena de mayor a menor
const arreglo = ordenados.map((x) => ({ ...x, total: x.cantidad * x.precio }));
const totalVentas = arreglo.reduce((suma, x) => suma + x.total, 0); //se suma las cantidades y las precios
console.log(filtrados);
console.log(ordenados);
console.log(arreglo);
console.log("el total de las ventas es: " + totalVentas);