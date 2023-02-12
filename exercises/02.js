console.clear();
/**
 * @param {Array} list
 * @returns {Array} list with strings - messages showing grades for every student
 */

function marksAverages_forEvery_student(list) {
  const notifications = [];
  list.forEach((student) => {
    let name = student.name;
    let marks = student.marks;
    if (!marks.length) {
      //added missing validation to have custom message if no grades
      notifications.push(`${name} does not have any marks yet.`);
    } else {
      let average = Math.round(marks.reduce((t, m) => t + m) / marks.length); //rounding result in case floating point numbers
      notifications.push(`${name} mark average is ${average}.`);
    }
  });
  return notifications;
}

const studentsList = [
  {
    name: "Petras",
    marks: [10, 2, 8, 4, 6],
  },
  {
    name: "Maryte",
    marks: [4, 6, 8, 10],
  },
  {
    name: "Jonas",
    marks: [8, 7, 5, 4, -1, 13, 8.7],
  },
  {
    name: "Ona",
    marks: [],
  },
];

const results = marksAverages_forEvery_student(studentsList);

// ***********************************
// DO NOT EDIT CODE BELOW THIS COMMENT
// ***********************************

console.assert(results[0] === "Petras mark average is 6.", "Neteisingai suskaiciuotas Petro pazymiu vidurkis.");

console.assert(results[1] === "Maryte mark average is 7.", "Neteisingai suskaiciuotas Marytes pazymiu vidurkis.");

console.assert(results[2] === "Jonas mark average is 6.", "Neteisingai suskaiciuotas Jono pazymiu vidurkis.");

console.assert(results[3] === "Ona does not have any marks yet.", "Neteisingai suskaiciuotas Onos pazymiu vidurkis.");
