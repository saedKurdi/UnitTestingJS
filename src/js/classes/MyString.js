// Creating class MyString :
export class MyString {
  str;

  constructor(str) {
    this.str = str;
  }

  // Methods :
  remove(index) {
    let strArray = this.str.split("");
    strArray.splice(index, 1);
    return strArray.join("");
  }

  insert(index, data) {
    let strArray = this.str.split("");
    let copyArray = this.str.split("");

    strArray[index + 1] = data;
    strArray.length += 1;
    for (let i = index + 2; i < strArray.length; i++) {
      strArray[i] = copyArray[i - 1];
    }
    return strArray.join("");
  }

  trimSign() {
    let strArray = this.str.split("");
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] == strArray[i + 1]) {
        strArray.splice(i, 1);
        i--;
      }
    }
    return strArray.join("");
  }

  toggle() {
    let strArray = this.str.split("");
    for (let i = 0; i < strArray.length; i++) {
      if (this.#isLowerCase(strArray[i])) {
        strArray[i] = strArray[i].toUpperCase();
      } else {
        strArray[i] = strArray[i].toLowerCase();
      }
    }
    return strArray.join("");
  }

  counter(char) {
    let count = 0;
    let strArray = this.str.split("");
    strArray.forEach((element) => {
      if (element.toLocaleLowerCase() === char.toLocaleLowerCase()) count++;
    });
    return count;
  }

  #isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
  }
}
