
export function parsNewDate(dates) {
    let date = new Date(dates);
    const opt = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
   
    const parsedDate =
      date.getDate() +
      " " +
      opt[date.getMonth()] +
      "," +
      " " +
      date.getFullYear();
    
    return parsedDate;
   
  }