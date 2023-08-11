export function totalDays(rentDate: Date, returnDate: Date) {
  rentDate = new Date(`${rentDate}`);
  returnDate = new Date(`${returnDate}`);

  let differenceInTime = returnDate.getTime() - rentDate.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays;
}