//Conversão de temperaturas

const cidade = "Curitiba";
const tempCelsius = 18.5;

const tempFahrenheit = tempCelsius * (9 / 5) - 32;
const tempKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`Temperatura em ${cidade} hoje está ${tempCelsius}.`);
console.log(`${tempCelsius}`);