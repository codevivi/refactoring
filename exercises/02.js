console.clear();
/**
 * Should print notification for each student.
 * @param {*} list
 */
function marksAverages_forEvery_student(list) {
  const notifications = [];
  list.forEach((student) => {
    if (student["name"] == "Maryte") {
      let i = 0;
      let sum = 0;
      for (; i < student["marks"].length; i++) {
        // should be some sort of validation...
        // can not remember what...
        if (true) {
          let m = student["marks"][i];
          sum += m;
        }
      }
      let average = sum / student["marks"].length;
      // console.log(`${student['name']} mark average is ${average}.`);
      notifications.push(`${student["name"]} mark average is ${average}.`);
    }

    if (student.name === "Jonas") {
      let count = student.marks.length;
      let sum = 0;
      while (count) {
        if (student.marks[--count] <= 10 && student.marks[count] % 1 == 0 && student.marks[count] > 0) {
          sum = sum + student.marks[count];
        }
      }
      // console.log(`${student.name} mark average is ${sum / 4}.`);
      notifications.push(`${student.name} mark average is ${sum / 4}.`);
    }

    switch (student.name) {
      case "Petras":
        notifications.push(`${student.name} mark average is ${student.marks.reduce((t, m) => t + m) / student.marks.length}.`);
        // console.log(`${student.name} mark average is ${student.marks.reduce((t, m) => t + m) / student.marks.length}.`);
        break;

      default:
        let average = 0;
        for (const m of student["marks"]) {
          average += m / student.marks.length;
        }
        notifications.push(`${student.name} mark average is ${average}.`);
        // console.log(`${student.name} mark average is ${s}.`);
        break;
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
