const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x in f) {
  document.getElementById("demo").innerHTML += x;
}