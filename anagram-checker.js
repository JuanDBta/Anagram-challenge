module.exports = function anagram(str1, str2) {
  let str1cleaned = "";
  let str2cleaned = "";
  let str3sorted = "";
  let str4sorted = "";

  str1cleaned = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
  str2cleaned = str2.toLowerCase().replace(/[^a-z0-9]/g, "");

  str3sorted = str1cleaned.split("").sort().join("");
  str4sorted = str2cleaned.split("").sort().join("");

  if (str3sorted === str4sorted) {
    return true;
  } else {
    return false;
  }
};

