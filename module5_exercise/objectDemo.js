// Program Name: objectDemo.js
// Author: Frank E. Ciszek
// Date: 2/10/2025
// Purpose: To practice using and manipulating JavaScript Objects

// Create a new object representing a personal computer
// with the properties listed in the assignment.
const computer = {
  make: "ASUS",
  model: "TUF Gaming B650 + wifi",
  cpu: "AMD Ryzen 7950X",
  cpuFrequenzyGHz: 4.5,
  memoryGB: 32,
  color: "black"
};
// Add two new fields to the JS object
computer.gpu = "nVidia GeForce RTX 308Ti";
computer.diskSpaceGB = "2000";

// console.log(computer);
// Modify the CPU frequency using dot notation
computer.cpuFrequenzyGHz = 5.0;
// Modify the Memory by using bracket notation
computer["memoryGB"] = 64;
// delete the color property
delete computer.color;

// Loop through the object and pring each key/value pair
for (key in computer) {
    console.log(key + ": " + computer[key])
}