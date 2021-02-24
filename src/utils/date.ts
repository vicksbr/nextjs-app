const pad2 = (num: number | string): string => {
  const numStr = num.toString();
  return numStr.length < 2 ? `0${numStr}` : numStr;
};

export const formatDate = (date: Date): string => {
  const [hours, minutes, day, month, year] = [
    pad2(date.getHours()),
    pad2(date.getMinutes()),
    pad2(date.getDate()),
    pad2(date.getMonth() + 1),
    date.getFullYear(),
  ];
  return `${hours}:${minutes} ${day}/${month}/${year}`;
};
