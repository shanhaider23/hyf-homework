//1-
const array = [
  (firstFunction = function () {
    console.log("first function");
  }),
  (secondFunction = function () {
    console.log("second function");
  }),
  (thirdFunction = function () {
    console.log("third function");
  }),
];
array.forEach((item) => item());
//2-
const specialFanction = function () {
  console.log("special fanction");
};
function normalFunction() {
  console.log("normal function");
}
specialFanction();
normalFunction();
//3-
objectFunction = {
  key: function () {
    console.log("This is object function");
  },
};
objectFunction.key();
