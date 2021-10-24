import data from '../consts/data'


/**
 * Transform the investmentData object into an array of objects such that its easy to loop over.
 * Each object in array would have investmentOption like 'Aggresive' | 'Balanced' | 'Conservative'
 * and investmentSubOptions Array containing objects {optionCode:.., optionName:..., reportUrl:...}
 * @returns Array
 */
export function transform () {
    const transformArr =  Object.entries(data.investmentOptions);
    return transformArr && transformArr.map((investment) => { return {investmentOption: investment[0], investmentSubOptions: investment[1]}});
} 

