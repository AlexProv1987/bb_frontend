export function GetIntenger(delim, vals, index){
    let returnVal = vals.split(delim)
    let parsed_val = parseInt(returnVal[index])
    if(isNaN(parsed_val)){
        return 0;
    }
    else{
        return parsed_val;
    }
}

export function GetFloat(delim, vals,index){
    let returnVal = vals.split(delim)
    let parsed_val = parseFloat(returnVal[index])
    if(isNaN(parsed_val)){
        return 0;
    }
    else{
        console.log(parsed_val)
        return parsed_val;
    }
}
export function ArraySum(valList, initial){
    let sum = initial
    valList.forEach(val=>{
        sum+=val
    })
    return sum;
}

export function ConvertUnitOfMeasure(val, convertRate){
    let converted = val * convertRate;
    return converted;
}

export function CheckNumber(val,max){
    if (val <= max){
        return val;
    }
    else{
        val = 0
        return val
    };
}