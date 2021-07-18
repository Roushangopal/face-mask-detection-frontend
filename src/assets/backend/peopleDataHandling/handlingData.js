const request = require("request");
var fs = require("fs");

fs.readFile("people.csv", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    var peopleId = [];
    var timeOfPeople = [];
    data1 = data.toString().trim();
    // console.log(data1);
    data2 = data1.split("\n");
    data2.forEach((element) => {
      element1 = element.split(",");
      id = element1[0].trim();
      t = element1[1].replace(/\r/, "");
      peopleId.push(id);
      timeOfPeople.push(t.trim());
    });
    console.log(peopleId);
    console.log(timeOfPeople);
    peopleId.forEach((element) => {
      request.get(
        "http://localhost:3000/people",
        { json: { id: element } },
        (err, res, body) => {
          if (err) {
            console.log(err);
          } else {
            console.log(body);
          }
        }
      );
    });
  }
});
