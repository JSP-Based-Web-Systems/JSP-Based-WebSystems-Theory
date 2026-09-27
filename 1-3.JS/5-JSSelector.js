// ============================================================
// 1. getElementById()
// ============================================================

// Select one element whose id is "asia".
// Do not use # with getElementById().
const asia = document.getElementById('asia');

// Check the selected element in the console.
console.log(asia);


// ============================================================
// 2. querySelector()
// ============================================================

// Select the first section element.
const firstSection = document.querySelector('section');

// Check the selected section.
console.log(firstSection);


// Select the element whose id is "asia" using a CSS selector.
// querySelector() uses CSS selector syntax, so # is required for an id.
const asiaSection = document.querySelector('#asia');

// Check the selected element.
console.log(asiaSection);


// Select the first element with the "visited" class.
const visitedCity = document.querySelector('.visited');

// Check the selected city.
console.log(visitedCity);


// Select the h2 element inside the element with the id "asia".
const title = document.querySelector('#asia h2');

// Check the selected h2 element.
console.log(title);


// Select the first li element inside the element with the id "asia".
const firstCity = document.querySelector('#asia li');

// Check the first city.
console.log(firstCity);


// ============================================================
// 3. querySelector() - When No Element Is Found
// ============================================================

// Find the first element with the "selected" class.
// There is no element with this class in the current HTML,
// so null is returned.
const city = document.querySelector('.selected');

// Check the result.
console.log(city);


// Change the text only when the element exists.
// Checking for null first helps prevent errors.
if (city !== null) {
    city.textContent = 'city is not null';
}


// ============================================================
// 4. querySelectorAll()
// ============================================================

// Select all li elements inside the element with the id "asia".
// Multiple elements are returned as a NodeList.
const asiaCities = document.querySelectorAll('#asia li');

// Check the NodeList.
console.log(asiaCities);


// Check each city one by one.
asiaCities.forEach((city) => {
    console.log(city.textContent);
});


// ============================================================
// 5. Add a Class to All li Elements
// ============================================================

// Select all li elements in the HTML document.
const cities = document.querySelectorAll('li');

// Add the "travel-item" class to each li element.
cities.forEach((city) => {
    city.classList.add('travel-item');
});

// Check the elements after adding the class.
console.log(cities);


// Check each city's name and class.
cities.forEach((city) => {
    console.log(city.textContent, city.className);
});


// ============================================================
// 6. querySelectorAll() - When No Element Is Found
// ============================================================

// Select all elements with the "selected" class.
// There are no matching elements in the current HTML.
const selectedCities = document.querySelectorAll('.selected');

// querySelectorAll() does not return null.
// It returns an empty NodeList when no elements are found.
console.log(selectedCities);

// Check the number of selected elements.
// The result is 0.
console.log(selectedCities.length);


// ============================================================
// 7. parentElement
// ============================================================

// Select the ul element inside the section with the id "asia".
const cityList = document.querySelector('#asia ul');

// Check the selected ul element.
console.log(cityList);


// Use parentElement to find the parent of the ul element.
// In the current HTML, section#asia is the parent element.
const parentSection = cityList.parentElement;

// Check the parent element.
console.log(parentSection);


// ============================================================
// 8. children
// ============================================================

// cityList is the ul element inside #asia.
// Use children to get its direct child elements.
const childCities = cityList.children;

// Check the child elements.
// The result is an HTMLCollection.
console.log(childCities);


// Convert the HTMLCollection to an array.
// After converting it to an array, forEach() can be used.
Array.from(childCities).forEach((city) => {
    console.log(city.textContent);
});


// ============================================================
// 9. DOM Selection Summary
// ============================================================

// Select one element by its id.
const asiaElement = document.getElementById('asia');

// Select one h2 element using a CSS selector.
const asiaTitle = document.querySelector('#asia h2');

// Select multiple li elements using a CSS selector.
const allAsiaCities = document.querySelectorAll('#asia li');

// Find the parent element of the selected h2.
const titleParent = asiaTitle.parentElement;

// Get the child elements of the selected section.
const asiaChildren = asiaElement.children;


// Check each result in the console.
console.log(asiaElement);
console.log(asiaTitle);
console.log(allAsiaCities);
console.log(titleParent);
console.log(asiaChildren);
