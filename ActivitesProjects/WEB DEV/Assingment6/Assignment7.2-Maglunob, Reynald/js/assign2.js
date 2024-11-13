function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear;
}

const birthYears = [2000, 2002, 2003];

const currentYear = new Date().getFullYear();

let ages = birthYears.map(birthYear => calculateAge(birthYear, currentYear));

ages.forEach(age => {
    console.log(`The age is ${age}`);
});
