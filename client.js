const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

const payOut = [];

function bonusCalc(employee) {
  for (let i = 0; i < employee.length; i++) {
    let name = employee[i].name;
    let bonus = ratingBonus(employee[i].reviewRating);
    if (bonus > 0) {
      bonus += timeBonus(employee[i].employeeNumber.length);
      bonus += tooMuch(employee[i].annualSalary);
    }
    let salary = parseInt(employee[i].annualSalary);
    bonus = isAllowed(bonus);
    let increase = salary * bonus;
    let totalC = increase + salary;
    let totalB = totalC - salary;
    totalC = Math.round(totalC);
    totalB = Math.round(totalB);
    payOut.push({
      name: name,
      bonusPercentage: bonus * 100,
      totalCompensation: totalC,
      totalBonus: totalB,
    });
  }
}
function timeBonus(idlength) {
  if (idlength == 4) {
    return 0.05;
  }
  return 0;
}
function isAllowed(bonus) {
  if (bonus > 0.13) {
    bonus = 0.13;
  } else if (bonus < 0) {
    bonus = 0;
  }
  return bonus;
}
function tooMuch(salary) {
  if (salary > 65000) {
    return -0.01;
  }
  return 0;
}
function ratingBonus(rating) {
  switch (rating) {
    case 1 || 2:
      return 0;
    case 3:
      return 0.04;
    case 4:
      return 0.06;
    case 5:
      return 0.1;
  }
}
console.log(bonusCalc(employees));
console.log(payOut);

console.log(employees);
