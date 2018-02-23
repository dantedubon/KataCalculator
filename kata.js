export default class Kata {
  add(numbers) {
    if (numbers.length === 0) {
      return 0;
    } else if (numbers.length === 1) {
      return parseInt(numbers);
    } else if (numbers.substring(0, 2) == "//") {
      const delimitador = numbers.substring(2, 3);
      const resto = numbers.substring(3);
      const arreglo = resto.split(delimitador);
      const suma = arreglo.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
      });
      return suma;
    } else {
      const arreglo = numbers.split(/[//n,]/);
      if (Math.min(...arreglo) < 0) {
        throw `Negatives not allowed ${Math.min(...arreglo)}`;
      }
      const suma = arreglo.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
      });
      return suma;
    }
  }
}
