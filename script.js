function firstNonRepeatedChar(str) {
  const charCount = {};

  // Step 1: Count each character's occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

// 🚫 Do not change the code below
const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));

