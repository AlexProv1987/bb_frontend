export function SplitString(delim, vals){
    let newCharArray = vals.split(delim)
    return newCharArray

}

export function Sum(...vals){
    let sum = 0;
    for (let val in vals) sum+=val;
    console.log(sum)
    return sum;
}

export function ConvertUnitOfMeasure(val, convertRate){
    let converted = val * convertRate;
    return converted;
}