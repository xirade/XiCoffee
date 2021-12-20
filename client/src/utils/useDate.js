import moment from "moment";

function getDate(str) {
  return moment().format(str);
}
function formatFromTo(date, str) {
  return moment(date).format(str);
}

function compareDate(fistDate, secondDate) {
  if (moment(fistDate).isSame(secondDate)) {
    return 0;
  }
  if (moment(fistDate).isBefore(secondDate)) {
    return -1;
  }
  return 1;
}

export { getDate, formatFromTo, compareDate };
