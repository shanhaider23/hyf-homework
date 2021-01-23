let firstWords =['Flex', 'Perfect', 'Extreme', 'Fort', 'Newly']
let secondWords = ['Corporate', 'IPS', 'APS', 'Limited', 'Organization']
let randomNumber = Math.floor(Math.random(0) * firstWords.length);
console.log(randomNumber);
let Name1 = firstWords[(randomNumber)] 
let Name2 = secondWords[(randomNumber)]
let fullName = `${Name1} ${Name2}`;
let startupName = `The startup:${fullName} contains ${fullName.length} characters.`;
console.log(startupName);
document.write(startupName);

