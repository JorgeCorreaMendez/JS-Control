const NumerosA = [4, 5, -6, 0, -8, 7];
const NumerosB = [2, 3, 4, 5];

/**
 *  Función que calcula el tiempo dado los siguientes parámetros
 * @function tiempo
 * @param {distancia}
 * @param {velocidad}
 */

// Aquí tu código

const tiempo = (km, kmH) => {
  let tiempo = km / kmH;

  let horas = 0;
  let minutos = 0;
  let segundos = 0;

  let decimal = Math.trunc(tiempo);
  decimal = tiempo - decimal;

  if (tiempo > 0) {
    horas = Math.floor(tiempo);
  }

  if (decimal < 60) {
    decimal = decimal * 60;
    minutos = Math.floor(decimal);

    decimal = decimal - minutos;
  }

  if (decimal < 60) {
    decimal = decimal * 60;

    segundos = Math.floor(decimal);
  }

  alert(`El tiempo en rocorrer ${km}Km a ${kmH}K\\h es:
        ${horas} hora(s)
        ${minutos} minuto(s) 
        ${segundos} segundo(s)`);
};

/**
 * Función que cuenta el nº de positivos, negativos y ceros del array
 *   NumerosA
 * @function contar
 */

// Aquí tu código

const contar = () => {
  let contador0 = 0;
  let contadorPositivo = 0;
  let contadorNegativo = 0;

  NumerosA.forEach((value) => {
    if (value > 0) {
      contadorPositivo++;
    } else if (value < 0) {
      contadorNegativo++;
    } else {
      contador0++;
    }
  });

  alert(
    `N° de positivos: ${contadorPositivo}, Negativos: ${contadorNegativo}, Ceros ${contador0}`
  );
};

/**
 * Función que calcula la media aritmética de los números pares y
 *   de los números impares de un array pasado por parámetro
 * @function media
 * @param {arr}
 */

// Aquí tu código

function media(arr) {
  let mediaPar = 0;
  let contadorPar = 0;
  let mediaImpar = 0;
  let contadorImpar = 0;

  arr.forEach((value) => {
    if (value % 2 == 0) {
      mediaPar += value;
      contadorPar++;
    } else {
      mediaImpar += value;
      contadorImpar++;
    }
  });

  alert(
    `La media de los pares es : ${mediaPar / contadorPar}
    La media de los impares es: ${mediaImpar / contadorImpar}`
  );
}

/**
 * Función que devuelve un array con la cantidad de números
 *   primos que se indiquen por parámetros. El rango de búsqueda es
 *   desde 1 a 100.
 * @function nPrimos
 * @param {cuantos}
 * @returns  array de primos
 */

// Aquí tu código

const nPrimos = (cantidadPrimos) => {
  let arrayPrimos = [];

  if (cantidadPrimos < 0 || cantidadPrimos > 100) {
    alert("Error, cantidad de primos incorrecta");
  } else {
    let contadorFinal = 0;
    index = 1;

    while (contadorFinal < cantidadPrimos) {
      while (index <= 100) {
        index++;

        if (esPrimos(index)) {
          arrayPrimos.push(index);
          contadorFinal++;
          break;
        }
      }
    }
  }

  console.table(arrayPrimos);
};

function esPrimos(valor) {
  let primo = true;

  for (let index = 2; index < valor; index++) {
    if (valor % index == 0) {
      primo = false;
      break;
    }
  }

  return primo;
}

/**
 *  Función que eleva los elementos del array NumerosA
 *    a cada uno de los elementos del arrayB y
 *    devuelve el resultado en un array
 * @function elevarArray
 * @returns array con los resultados
 */

// Aquí tu código

function elevarArray() {
  let elevados = [];

  NumerosA.map((numA) => {
    NumerosB.map((numB) => {
      elevados.push(Math.pow(numA, numB));
    });
  });

  return elevados;
}

/**
 * Programa principal
 */

let opcion = 1;
while (opcion !== 0) {
  opcion = window.prompt(`Seleccionar un opción:\n
                              0.- Finalizar programa\n
                              1.- Calcular el tiempo\n
                              2.- Contar\n
                              3.- Media\n
                              4.- Primos\n
                              5.- Elevar\n
                            `);

  opcion = parseInt(opcion);
  switch (opcion) {
    case 1:
      let distancia = prompt("Introduce la distancia en Km : ");
      let velocidad = prompt("Introduce la velocidad en Km\\h: ");

      tiempo(distancia, velocidad);
      break;
    case 2:
      contar();
      break;
    case 3:
      media(NumerosB);
      break;
    case 4:
      let cantidadPrimos = prompt("N° de primos a visualizar");

      nPrimos(cantidadPrimos);
      break;
    case 5:
      console.table(elevarArray());
      break;
  }
}

console.log("Finalizado...");