export const calculateImperialBmi = (weightP, heightIn) => {    
    const bmiImperialValue = (((weightP)/(heightIn * heightIn )) * 703).toFixed(2);
    

    const bmiImperialMessage = setBMIMperialMessage(bmiImperialValue);
    return [bmiImperialValue, bmiImperialMessage];
  };
  
  const setBMIMperialMessage = finalBMIImperial => {
    if (finalBMIImperial < 18.5) {
      return "Underweight";
    }
  
    if (finalBMIImperial > 18.5 && finalBMIImperial < 25) {
      return "Normal";
    }
  
    if (finalBMIImperial > 25 && finalBMIImperial < 30) {
      return "Overweight";
    }
  
    if (finalBMIImperial > 30) {
      return "Obese";
    }
  };