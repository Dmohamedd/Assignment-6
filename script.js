touch script.js
const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) {
    alert('red,red,red, apple, pear, blue, apple, apple, pear, blue, blue, blue');
    return;
  }

  const words = text.toLowerCase().match(/\b\w+\b/g);
  const frequencyMap = {};

  words.forEach(word => {
    if (frequencyMap[word]) {
      frequencyMap[word]++;
    } else {
      frequencyMap[word] = 1;
    }
  });

  const sortedWords = Object.keys(frequencyMap).sort((a, b) => {
    // Sorting by frequency, and then by word if frequencies are equal
    if (frequencyMap[b] === frequencyMap[a]) {
      return a.localeCompare(b);
    }
    return frequencyMap[b] - frequencyMap[a];
  });

  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Word Name</th>
      <th>Word Frequency</th>
    </tr>
  `;

  for (let i = 0; i < Math.min(5, sortedWords.length); i++) {
    const word = sortedWords[i];
    const frequency = frequencyMap[word];

    const row = table.insertRow();
    row.innerHTML = `
      <td>${word}</td>
      <td>${frequency}</td>
    `;
  }

  resultDiv.innerHTML = '';
  resultDiv.appendChild(table);

  console.log("Frequency Table:", frequencyMap);
});
