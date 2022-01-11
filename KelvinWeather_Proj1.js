/*Deep in his mountain-side meteorology lab, 
the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. 
However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. 

formulas: 
Celsius = K − 273.15
Fahrenheit = Celsius * (9/5) + 32 */

const kelvin = 293; 
// converting kelvin to celsius
let celsius = kelvin - 273.15; 
console.log('Kelvin to Celsius:' + celsius);
//converting celsius to fahrenheit
let fahrenheit = celsius * (9/5)+32;
console.log('Celsius to Fahrenheit:' + fahrenheit);
//using floor() to round off the value of fahrenheit.
fahrenheit = Math.floor(fahrenheit);
console.log('Fahrenheit using floor:' + fahrenheit);
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit.`)

//converting celsius into Newton
let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`Celsius to Newton is ${newton} Newton degrees`);
