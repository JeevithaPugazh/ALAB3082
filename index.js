
//part 1
const PI = 3.1215;
let radius = 5;
const area = PI * radius * radius;
console.log(area)
let plantMinSpace = 0.8;
let maxPlantsWithInArea = area / plantMinSpace;
let initialPlants = 20;

//Plant growth after specific week

let plantgrowthInWeek1 = initialPlants * 2;
let plantgrowthInWeek2 = plantgrowthInWeek1 * 2;
let plantgrowthInWeek3 = plantgrowthInWeek2 * 2;

console.log("Part 1");
console.log("------ Initial Week: ------");
let occupiedPercentage =
  ((initialPlants * plantMinSpace) / area) * 100;
console.log(
  `Initial occupied space in a gardern is: ${occupiedPercentage}%`
);

//week1 updates
console.log("------ Week 1 update: ------");
let Week1occupiedPercentage =
  ((plantgrowthInWeek1 * plantMinSpace) / area) * 100;
if (Week1occupiedPercentage > 80) {
  console.log(
    `Pruned: Garden capacity exceeded! Pruned it. Garden capacity  is:${Week1occupiedPercentage}%`
  );
} else if (
  50 > Week1occupiedPercentage &&
  80 < Week1occupiedPercentage
) {
  console.log(
    `Monitered: Garden capacity is within the range. Garden capacity is:${Week1occupiedPercentage}%`
  );
} else {
  console.log(
    `Planted: Garden capacity is less then 50%. Planted more plants. Garden capacity is:${Week1occupiedPercentage}%`
  );
}

//week2 updates
console.log("------ Week 2 update: ------");
let Week2occupiedPercentage =
  ((plantgrowthInWeek2 * plantMinSpace) / area) * 100;
if (Week2occupiedPercentage > 80) {
  console.log(
    `Pruned: Garden capacity exceeded! Pruned it. Garden capacity is:${Week2occupiedPercentage}%`
  );
} else if (
  50 > Week2occupiedPercentage &&
  80 < Week2occupiedPercentage
) {
  console.log(
    `Monitered: Garden capacity is within the range. Garden capacity  is:${Week2occupiedPercentage}%`
  );
} else {
  console.log(
    `Planted: Garden capacity is less then 50%. Planted more plants`
  );
}


//week3 updates
console.log("------ Week 3 update: ------");
let Week3occupiedPercentage =
  ((plantgrowthInWeek3 * plantMinSpace) / area) * 100;
if (Week3occupiedPercentage > 80) {
  console.log(
    `Pruned: Garden capacity exceeded! Pruned it. Garden capacity is:${Week3occupiedPercentage}%`
  );
} else if (
  50 > Week3occupiedPercentage &&
  80 < Week3occupiedPercentage
) {
  console.log(
    `Monitered: Garden capacity is within the range. Garden capacity is:${Week3occupiedPercentage}%`
  );
} else {
  console.log(
    `Planted: Garden capacity is less then 50%. Planted more plants. Garden capacity is:${Week1occupiedPercentage}%`
  );
} 

//Part 2
//Scientists start with 100 plants
let areaOf100plants = 100*plantMinSpace
let areaof10week = areaOf100plants*Math.pow(2,10)
let radiusFormula = Math.sqrt(areaof10week / Math.PI)
console.log("")
console.log("Part 2");
console.log(`Radius of the expanded garden is:${radiusFormula}`)

//Part 3
//try-catch
console.log("")
console.log("Part 3")
let initialPlants2 = 100;

try {
	if (initialPlants2 && radius) {
		throw "Error - Limit exceeded";
	} 
} catch (error) {
	console.log(error);
}

