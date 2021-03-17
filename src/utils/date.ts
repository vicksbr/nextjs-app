const pad2 = (num: number | string): string => {
  const numStr = num.toString();
  return numStr.length < 2 ? `0${numStr}` : numStr;
};

export const formatDate = (timeStamp: number): string => {
  const date = new Date(timeStamp)
  const [hours, minutes, day, month, year] = [
    pad2(date.getHours()),
    pad2(date.getMinutes()),
    pad2(date.getDate()),
    pad2(date.getMonth() + 1),
    date.getFullYear(),
  ];
  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

// Usage example: randomDate(new Date(2018, 1, 1), new Date())

export const randomDate = (start: Date, end: Date) =>  {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}

