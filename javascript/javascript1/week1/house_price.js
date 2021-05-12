let peterHouseWidth = 8
let peterHouseDepth = 10
let peterHouseHight = 10 
let peterGardenSizeInM2 = 100
let peterHouseVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHight
let housePricePeter = peterHouseVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;
if (housePricePeter < 2500000){
    console.log(`peter is paying ${2500000 - housePricePeter} more than actual price.`)
    document.write(`Peter is paying ${2500000 - housePricePeter} more than actual price.`)
}else{
    console.log(`2500000 is good price.`)
}
let juliaHouseWidth = 5
let juliaHouseDepth = 11
let juliaHouseHight = 8 
let juliaGardenSizeInM2 = 70
let juliaHouseVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHight
let housePricejulia = juliaHouseVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
if (housePricejulia < 1000000){
    console.log(`Julia is paying ${1000000 - housePricejulia} more than actual price.`)
    document.write(`Peter is paying ${100000 - housePricejulia} more than actual price.`)
}else{
    console.log(`1000000 is good price for Julia.`)
    document.write(`1000000 is good price for Julia.`)
} 