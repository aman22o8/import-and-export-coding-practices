const addDays = require("date-fns/addDays");

const myresult = (days) => {
  const date1 = addDays(new Date("2020-07-22"), days);
  return `${date1.getDate()}-${
    date1.getMonth() + 1
  }-${myredate1.getFullYear()}`;
};

module.exports = myresult;
