const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height^2)  ;
}
function getBMIMeaning(weight, height) {
 let BMI = calculateBMI(weight, height) 
  if (BMI> 25.0) {
    return "Overweight"
    
  } else if(BMI< 18.5){
    return "Underweight"
  }
  else{
    return "Normal weight"
  }
}
module.exports = getBMIMeaning
