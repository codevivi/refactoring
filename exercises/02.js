console.clear();
/**
 * Should print notification for each student.
 * @param {*} list
 */
// I still don't understand if this funcion meant to filter grades (like it is doing for Jonas),
// or just calculate average from all (like in switch default) where it is just missing Math.round(average) to pass test for Jonas
//currently both variants are pushed to notifications, what messes accsess by index in assert tests.
//so what functionality was meant to be? Filter or Not To Filter?
function marksAverages_forEvery_student(list) {
  const notifications = [];
  list.forEach((student) => {
    let name = student.name;
    let marks = student.marks;
    if (name == "Maryte") {
      let i = 0;
      let sum = 0;
      for (; i < marks.length; i++) {
        // should be some sort of validation... IS IT ABOUT FILTERING GRADES ????
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
        console.log(name);
        let average = 0;
        for (const m of marks) {
          average += m / marks.length;
        }
        notifications.push(`${name} mark average is ${average}. FROM SWITCH DEFAULT`);
        // console.log(`${name} mark average is ${s}.`);
        break;
    }
  });
  console.log(notifications);
  //   [
  //   'Petras mark average is 6.',
  //   'Maryte mark average is 7.',
  //   'Maryte mark average is 7. FROM SWITCH DEFAULT',
  //   'Jonas mark average is 6.',
  //   'Jonas mark average is 6.385714285714286. FROM SWITCH DEFAULT',
  //   'Ona mark average is 0. FROM SWITCH DEFAULT'
  // ]
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
