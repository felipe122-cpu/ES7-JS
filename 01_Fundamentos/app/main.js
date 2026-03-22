// construit un conversor dque reciba una entrada  (valor +  unidad de origen + unidad de destino)
// validae correctamente la entrada y devolver el valor formateado


// Temperatura: C, F, K
// Longitud: m, cm, km
// Peso: kg, g, lb

// Temperatura
//- C a F: (C * 9/5) + 32
//- C a K: C + 273.15
//- F a C: (F - 32) * 5/9
//- F a K: (F - 32) * 5/9 + 273.15
//- K a C: K - 273.15
//- K a F: (K - 273.15) * 9/5 + 32

// Longitud
//- m a cm: m * 100
//- m a km: m / 1000
//- cm a m: cm / 100
//- cm a km: cm / 100000
//- km a m: km * 1000
//- km a cm: km * 100000

// Peso
//- kg a g: kg * 1000
//- kg a lb: kg * 2.20462
//- g a kg: g / 1000
//- g a lb: g / 453.592
//- lb a kg: lb / 2.20462
//- lb a g: lb * 453.592
// Restricciones
// No usar librerias
//debes validar entradas y manejar errores de forma adecuada
//el programa no debe romperse ante entradas invalidas, 
 //sino que debe informar al usuario de manera clara y amigable sobre el error y cómo corregirlo.

function convertir(valor, unidadOrigen, unidadDestino) {
  // Validar entradas
  const valorNum = Number(valor);
  if (!Number.isFinite(valorNum)) {
    throw new Error("El valor debe ser un número válido");
  }
    const unidadesValidas = ["C", "F", "K", "m", "cm", "km", "kg", "g", "lb"];
    if (!unidadesValidas.includes(unidadOrigen) || !unidadesValidas.includes(unidadDestino)) {  
    throw new Error("Las unidades deben ser una de las siguientes: " + unidadesValidas.join(", "));
    }
    // Realizar conversión

    if (unidadOrigen === "C" && unidadDestino === "F") {    
    return (valorNum * 9/5) + 32;
  } else if (unidadOrigen === "C" && unidadDestino === "K") {
    return valorNum + 273.15;
  } else if (unidadOrigen === "F" && unidadDestino === "C") {
    return (valorNum - 32) * 5/9;
  } else if (unidadOrigen === "F" && unidadDestino === "K") {
    return (valorNum - 32) * 5/9 + 273.15;
  } else if (unidadOrigen === "K" && unidadDestino === "C") {
    return valorNum - 273.15;
  } else if (unidadOrigen === "K" && unidadDestino === "F") {
    return (valorNum - 273.15) * 9/5 + 32;
  } else if (unidadOrigen === "m" && unidadDestino === "cm") {
    return valorNum * 100;
  } else if (unidadOrigen === "m" && unidadDestino === "km") {
    return valorNum / 1000;
  } else if (unidadOrigen === "cm" && unidadDestino === "m") {
    return valorNum / 100;
  } else if (unidadOrigen === "cm" && unidadDestino === "km") {
    return valorNum / 100000;
  } else if (unidadOrigen === "km" && unidadDestino === "m") {
    return valorNum * 1000;
  } else if (unidadOrigen === "km" && unidadDestino === "cm") {
    return valorNum * 100000;
  } else if (unidadOrigen === "kg" && unidadDestino === "g") {
    return valorNum * 1000;
  } else if (unidadOrigen === "kg" && unidadDestino === "lb") {
    return valorNum * 2.20462;
  } else if (unidadOrigen === "g" && unidadDestino === "kg") {
    return valorNum / 1000;
  } else if (unidadOrigen === "g" && unidadDestino === "lb") {
    return valorNum / 453.592;
  } else if (unidadOrigen === "lb" && unidadDestino === "kg") {
    return valorNum / 2.20462;
  } else if (unidadOrigen === "lb" && unidadDestino === "g") {
    return valorNum * 453.592;
  } else {
    throw new Error("Conversión no soportada entre " + unidadOrigen + " y " + unidadDestino);
  }
}

// Ejemplo de uso
try {
  const resultado = convertir("100", "C", "F");
  console.log("Resultado de la conversión:", resultado);
} catch (error) {
  console.error("Error en la conversión:", error.message);
}

console.table([
  { valor: "100", unidadOrigen: "C", unidadDestino: "F" },
  { valor: "0", unidadOrigen: "C", unidadDestino: "K" },
    { valor: "32", unidadOrigen: "F", unidadDestino: "C" }, 
    { valor: "212", unidadOrigen: "F", unidadDestino: "K" },
    { valor: "273.15", unidadOrigen: "K", unidadDestino: "C" },
    { valor: "373.15", unidadOrigen: "K", unidadDestino: "F" },
    { valor: "1", unidadOrigen: "m", unidadDestino: "cm" },
    { valor: "1000", unidadOrigen: "m", unidadDestino: "km" },
    { valor: "100", unidadOrigen: "cm", unidadDestino: "m" },
    { valor: "100000", unidadOrigen: "cm", unidadDestino: "km" },
    { valor: "1", unidadOrigen: "km", unidadDestino: "m" },
    { valor: "0.001", unidadOrigen: "km", unidadDestino: "cm" },
    { valor: "1", unidadOrigen: "kg", unidadDestino: "g" },
    { valor: "1", unidadOrigen: "kg", unidadDestino: "lb" },
    { valor: "1000", unidadOrigen: "g", unidadDestino: "kg" },
    { valor: "453.592", unidadOrigen: "g", unidadDestino: "lb" },
    { valor: "2.20462", unidadOrigen: "lb", unidadDestino: "kg" },
    { valor: "1", unidadOrigen: "lb", unidadDestino: "g" },
]);