console.clear();
/**
 * Should print notification for each student.
 * @param {*} list
 */
function marksAverages_forEvery_student(list) {
  const notifications = [];
  list.forEach((student) => {
    let name = student.name;
    let marks = student.marks;
    if (name == "Maryte") {
      let i = 0;
      let sum = 0;
      for (; i < marks.length; i++) {
        // should be some sort of validation...
        // can not remember what...
        if (true) {
          let m = marks[i];
          sum += m;
        }
      }
      let average = sum / marks.length;
      // console.log(`${name} mark average is ${average}.`);
      notifications.push(`${name} mark average is ${average}.`);
    }

    if (name === "Jonas") {
      let count = marks.length;
      let sum = 0;
      while (count) {
        if (marks[--count] <= 10 && marks[count] % 1 == 0 && marks[count] > 0) {
          sum = sum + marks[count];
        }
      }
      // console.log(`${name} mark average is ${sum / 4}.`);
      notifications.push(`${name} mark average is ${sum / 4}.`);
    }

    switch (name) {
      case "Petras":
        notifications.push(`${name} mark average is ${marks.reduce((t, m) => t + m) / marks.length}.`);
        // console.log(`${name} mark average is ${marks.reduce((t, m) => t + m) / marks.length}.`);
        break;

      default:
        let average = 0;
        for (const m of marks) {
          average += m / marks.length;
        }
        notifications.push(`${name} mark average is ${average}.`);
        // console.log(`${name} mark average is ${s}.`);
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
