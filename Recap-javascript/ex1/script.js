const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

console.log(markMass, markHeight, johnMass, johnHeight);


const bmiMark= markMass /(markHeight ** 2);
const bmiJohn= johnMass /(johnHeight ** 2);

console.log('Bmi mark', bmiMark , '- bmbi john', bmiJohn);

console.log('mark ha a higher bmi?');

let  markHigherBMI= Boolean;

if (bmiMark > bmiJohn) {
    markHigherBMI = true;
}
console.log(markHigherBMI);










