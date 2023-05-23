export function GetIntenger(delim, vals, index){
    //this is horrid to loop over each time to split if this was a large array, 
    //leaving for now since its a singular usecase atm
    let returnVal = vals.split(delim)
    let parsed_val = parseInt(returnVal[index])
    if(isNaN(parsed_val)){
        return 0;
    }
    else{
        return parsed_val;
    }
}

export function ArraySum(valList, initial){
    let sum = initial
    console.log(valList)
    valList.forEach(val=>{
        sum+=val
    })
    console.log(sum)
    return sum;
}

export function ConvertUnitOfMeasure(val, convertRate){
    let converted = val * convertRate;
    console.log(converted)
    return converted;
}

export function CheckNumber(val,max){
    console.log(val)
    if (val <= max){
        return val;
    }
    else{
        val = 0
        return val
    };
}