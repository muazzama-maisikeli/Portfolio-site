const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');

textInput.addEventListener('input', () => {
  const trimmed = textInput.value.trim();
  const words = trimmed === "" ? [] : trimmed.split(/\s+/);  // Split by any whitespace
  wordCountDisplay.textContent = words.length;
});