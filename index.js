class Formatter {
  //add static methods here

  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  static sanitize(text) {
    return text.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(text) {
    let words = text.split(" ");
    let newWords = [];
    let lowerCaseWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let index in words) {
      if (index == 0 || !lowerCaseWords.includes(words[index])) {
        newWords.push(Formatter.capitalize(words[index]));
      } else {
        newWords.push(words[index]);
      }
    }
    return newWords.join(" ");

  }

}