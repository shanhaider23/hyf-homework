let dogYearOfBirth = 2018
let dogYearFuture = 2027
let dogYear =dogYearFuture - dogYearOfBirth
let dogAgeInHumanYear = 16*Math.log(dogYear)+31;
let shouldShowResultInDogYears = `Your dog will be ${dogAgeInHumanYear} dog years old in ${dogYearFuture}.`;
let shouldShowResultInHumanYears = `Your dog will be ${dogYear} human years old in ${dogYearFuture}`;
if (dogYear <= 17){
    console.log(shouldShowResultInDogYears)
    document.write(shouldShowResultInDogYears);
} else{
console.log(shouldShowResultInHumanYears);
document.write(shouldShowResultInHumanYears);
}
