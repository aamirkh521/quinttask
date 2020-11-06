export function getChunks(arr, start = 0, limit = 5) {
  return arr.slice(start, start + limit);
}

export function getFormattedDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getDate()}  ${getMonthStr(date.getMonth())} ${date.getFullYear()}`;
}

function getMonthStr(month) {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    default:
      return "Dec";
  }
}

export const colors = [
  { bg: "cornflowerblue", fg: "white" },
  { bg: "cadetblue", fg: "white" },
  { bg: "darkblue", fg: "white" },
  { bg: "darkcyan", fg: "white" },
  { bg: "tomato", fg: "white" },
  { bg: "coral", fg: "white" },
  { bg: "blueviolet", fg: "white" },
  { bg: "brown", fg: "white" },
  { bg: "chocolate", fg: "white" },
  { bg: "crimson", fg: "white" },
];
