const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// Sort the array in ascending order
ages.sort((a, b) => a - b);

// Find the minimum and maximum ages
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
  medianAge = ages[middleIndex];
}

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average) using abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Age Range:", ageRange);
console.log("|Min - Average|:", minDiff);
console.log("|Max - Average|:", maxDiff);
