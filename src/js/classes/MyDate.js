// Creating class MyDate :
export class MyDate {
  #date;

  constructor(date = new Date()) {
    this.#date = date;
  }

  isFuture() {
    return this.#date > new Date();
  }

  nextDay() {
    this.#date.setDate(this.#date.getDate() + 1);
    return this.#date.getUTCDate();
  }

  isLeapYear() {
    return this.#date.getFullYear() % 4 === 0;
  }

  showDate() {
    return this.#formatDate(this.#date.toLocaleDateString());
  }

  // Function to convert the day number to its word equivalent
  #dayToWords(day) {
    const dayWords = {
      1: "first",
      2: "second",
      3: "third",
      4: "fourth",
      5: "fifth",
      6: "sixth",
      7: "seventh",
      8: "eighth",
      9: "ninth",
      10: "tenth",
      11: "eleventh",
      12: "twelfth",
      13: "thirteenth",
      14: "fourteenth",
      15: "fifteenth",
      16: "sixteenth",
      17: "seventeenth",
      18: "eighteenth",
      19: "nineteenth",
      20: "twentieth",
      21: "twenty-first",
      22: "twenty-second",
      23: "twenty-third",
      24: "twenty-fourth",
      25: "twenty-fifth",
      26: "twenty-sixth",
      27: "twenty-seventh",
      28: "twenty-eighth",
      29: "twenty-ninth",
      30: "thirtieth",
      31: "thirty-first",
    };

    return dayWords[day] || "";
  }

  // Function to get the full name of the month from its number
  #monthToName(month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1] || "";
  }

  // Function to convert a date in the format "dd/mm/yyyy" to "day month"
  #formatDate(dateStr) {
    // Split the date string into day, month, and year
    const [day, month, year] = dateStr.split("/").map(Number);

    // Convert day and month to their word equivalents
    const dayWord = this.#dayToWords(day);
    const monthName = this.#monthToName(month);

    // Combine day and month into the final format
    return `${dayWord} ${monthName}`;
  }
}
