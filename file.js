const fs = require("fs");

fs.readFile("home.html", function (err, data) {
  if (err) {
    console.log(err);
  }
  const contant = data.toString();
  fs.writeFile("text.html", contant, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("sucsess");
  });
});
