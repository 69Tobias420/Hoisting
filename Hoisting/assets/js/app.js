//--------| Example number One (1)
console.log("-------Example 1-------")

let boris = "Boris & Jeanette"
let vlad = "Vlad & Kim"

myNeighbors(boris, vlad)

function myNeighbors(rightN, leftN) {
  console.log("My right neighbors are " + rightN)
  console.log("My left neighbors are " + leftN)
}

//--------| Example number Two (2)
console.log("-------Example 2-------")

favAnimal("Female", "Lynx")

function favAnimal(animalGender, animalName) {
  console.log("My favorite animal is " + animalGender + " " + animalName)
}