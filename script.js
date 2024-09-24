const textBox = document.getElementById('evaluatedText');
const wordCountDisplay = document.getElementById('wordCount');

textBox.addEventListener('input', () => {
  const text = textBox.value.trim(); // Remove extra spaces at the start and end
  const words = text.split(/\s+/).filter(word => word.length > 0); // Filter out empty strings
  const wordCount = words.length;
  wordCountDisplay.textContent = isNaN(wordCount) ? 0 : wordCount;
});
