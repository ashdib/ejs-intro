import express from "express";
const app = express();
const port = 3000;

// get current day and turn into index
// if index is between 0 to 5 then is weekday
// else the day is weekend
// const indexDay = new Date().getDay();
// check if statusOfDay
// if index is 0 or 5 is weekend
// other than that is weekdays

// const statusDay = (indexOfDay) => {
//   if (indexOfDay === 0 || indexOfDay === 6) {
//     return "This is weekend";
//   } else {
//     return "This is weekday, work hard fellas";
//   }
// };

// var getStatusDay = statusDay(indexDay);

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if(day===0 || day === 6){
    type = "a weekend";
    adv =  "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
