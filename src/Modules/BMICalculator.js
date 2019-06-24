export const bmiCalculation = (weight, height, method) => {
  parseFloat(weight);
  parseFloat(height);
  let bmi;

  weight = isNaN(weight) ? 0 : weight;
  height = isNaN(height) ? 0 : height;

  switch(method) {
    case 'metric':
      bmi = weight / (height / 100 * height / 100);
      break;
    case 'imperial':
      bmi = weight = weight * 703 / (height * height)
      break;
  }

  let finalBMI = parseFloat(bmi.toFixed(2));
  let BMIMessage = setBMIMessage(finalBMI)

  if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0 || finalBMI < 0|| weight <= 0 || height <= 0 ){
    return "Please, fill in positive numbers";
  } else {
    return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
  }
}

const setBMIMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "Underweight";
  }

  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal";
  }

  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  }

  if (finalBMI > 30) {
    return "Obese";
  }
}