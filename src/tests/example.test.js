import { MyString } from "../js/classes/MyString";
import { MyDate } from "../js/classes/MyDate";

const myString = new MyString("Salaamm NeCeSeN ?");
const myDate = new MyDate();

it("Testing Strings", () => {
  expect(myString.toggle()).toBe("sALAAMM nEcEsEn ?");
  expect(myString.counter("s")).toBe(2);
  expect(myString.trimSign()).toBe("Salam NeCeSeN ?");
  expect(myString.insert(0, "w")).toContain("w");
});

// Current year is 2024 :
it("Testing Dates", () => {
  expect(myDate.isFuture()).toBeFalsy();
  expect(myDate.isLeapYear()).toBeTruthy();
});
