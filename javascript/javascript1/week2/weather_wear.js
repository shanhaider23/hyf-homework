function userCloths(temperature) {
    if (temperature >= 18) {
        return 'shorts and a t-shirt';
    } else if (temperature >= 10 && temperature < 20) {
        return 'Sweater and cap'
    } else if (temperature >= 0 && temperature < 9) {
        return 'Jacket'
    } else {
        return 'Winter Jacket, Cap and Gloves'
    }
}
console.log(`It is better to wear ${userCloths(22)} due to weather temperature`);

console.log(`It is better to wear ${userCloths(1)} due to weather temperature`);