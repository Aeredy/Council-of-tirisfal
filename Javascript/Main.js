const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
function shiftAlphabet(startLetter) {
    const startIndex = alphabet.indexOf(startLetter.toUpperCase());
    return alphabet.slice(startIndex) + alphabet.slice(0, startIndex);
}

function updateLabel(newLabel) {
    document.getElementById('sentenceLabel').innerText = newLabel;
}

function CipherSentence() {
    const Reference_word_Space = document.getElementById('Reference-Word').value.trim().toUpperCase();
    const Reference_word = Reference_word=Reference_word_Space.split(" ").join();
    const sentence = document.getElementById('sentence').value.trim();
    
    console.log("Reference_word:", Reference_word);
    console.log("Sentence:", sentence);

    if (!Reference_word || !sentence) {
        alert('Please enter both a reference word and a sentence.');
        return;
    }

    let translatedSentence = '';
    let currentReferenceIndex = 0;
    let currentAlphabet = shiftAlphabet(Reference_word[currentReferenceIndex]);

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        const isUpperCase = char === char.toUpperCase();
        const upperChar = char.toUpperCase();
        console.log("Processing char:", char);

        if (alphabet.includes(upperChar)) {
            console.log("Current Alphabet:", currentAlphabet);
            const originalIndex = alphabet.indexOf(upperChar);
            let translatedChar = currentAlphabet[originalIndex];
            translatedSentence += isUpperCase ? translatedChar : translatedChar.toLowerCase(); 
        } else {
            translatedSentence += char;
            currentReferenceIndex = (currentReferenceIndex + 1) % Reference_word.length;
            currentAlphabet = shiftAlphabet(Reference_word[currentReferenceIndex])
        }
    }

    console.log("Encripted Sentence:", translatedSentence);
    document.getElementById('output').innerText = translatedSentence;
    updateLabel("Encrypted Sentence:");
}

function DecipherSentence() {
    const Reference_word_Space = document.getElementById('Reference-Word').value.trim().toUpperCase();
    const Reference_word = Reference_word=Reference_word_Space.split(" ").join();
    const sentence = document.getElementById('sentence').value.trim();
    
    console.log("Reference_word:", Reference_word);
    console.log("Sentence to decipher:", sentence);

    if (!Reference_word || !sentence) {
        alert('Please enter both a reference word and a sentence.');
        return;
    }

    let decipheredSentence = '';
    let currentReferenceIndex = 0;
    let currentAlphabet = shiftAlphabet(Reference_word[currentReferenceIndex]);

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        const isUpperCase = char === char.toUpperCase();
        const upperChar = char.toUpperCase();
        console.log("Processing char:", char);

        if (alphabet.includes(upperChar)) {
            console.log("Current Alphabet:", currentAlphabet);
            const decodedIndex = currentAlphabet.indexOf(upperChar);
            let originalChar = alphabet[decodedIndex];
            if (char === ' '){
                decipheredSentence += originalChar.toLowerCase();
            }
            else {
                decipheredSentence += isUpperCase ? originalChar : originalChar.toLowerCase();
            }
        }
        else{
            decipheredSentence += char;
            currentReferenceIndex = (currentReferenceIndex + 1) % Reference_word.length;
            currentAlphabet = shiftAlphabet(Reference_word[currentReferenceIndex]);
        }
    }
    console.log("Deciphered Sentence:", decipheredSentence);
    document.getElementById('output').innerText = decipheredSentence;
    updateLabel("Decrypted Sentence:");
}
