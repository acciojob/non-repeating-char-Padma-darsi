function firstNonRepeatedChar(str) {
    // Create a frequency map to store character counts
    const charCount = {};
    
    // Iterate through the string and count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }
    
    return null; // If no non-repeated character is found, return null
}

const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));
