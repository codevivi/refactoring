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
    if (name == "Maryte") {
      let sum = 0;
      for (let i = 0; i < marks.length; i++) {
        // should be some sort of validation... It is probably about check if not grades in a list
        // can not remember what...
        sum += marks[i];
      }
      let average = sum / marks.length;
      // console.log(`${name} mark average is ${average}.`);
      notifications.push(`${name} mark average is ${average}.`);
    } else if (name === "Jonas") {
      //this is not a way of counting average, it should not be a task for this function to filter grades, and it does not for other students, so I will remove it. And unify average counting for all students.
      let count = marks.length;
      let sum = 0;
      while (count) {
        if (marks[--count] <= 10 && marks[count] % 1 == 0 && marks[count] > 0) {
          sum = sum + marks[count];
        }
      }
      // console.log(`${name} mark average is ${sum / 4}.`);
      notifications.push(`${name} mark average is ${sum / 4}.`);
    } else if (name === "Petras") {
      notifications.push(`${name} mark average is ${marks.reduce((t, m) => t + m) / marks.length}.`);
      console.log(`${name} mark average is ${marks.reduce((t, m) => t + m) / marks.length}.`);
    } else {
      let average = 0;
      for (const m of marks) {
        average += m / marks.length;
      }
      // counting average this way is same as summing all marks and dividing form marks quantity;
      // (a + b + c) / n = a/n + b/n + c/n
      // a/n + b/n +c/n - a/n -b/n -c/n = 0
      // 0=0

      // console.log(`${name} mark average is ${s}.`);
      notifications.push(`${name} mark average is ${average}.`);
    }
  });
  console.log(notifications);
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
