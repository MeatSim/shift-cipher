# Shift Cipher
Coded in JavaScript for Codecademy JavaScript Practice: Classes
## What's a shift cipher?
A shift cipher, also known as a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) because Julius Caesar used it, encrypts a message by replacing each letter with another letter that is a number of positions later in the alphabet. For example, shifting 2 positions would substitute 'A' with 'C,' 'B' with 'D,' and so on, with 'Y' and 'Z' going back to the beginning of the alphabet.
## How it works
The class ShiftCipher
 - creates instances that shift based on the number passed to ShiftCipher to create the instance
 - includes an encrypt method that shifts the string passed to it by the number used to create the instance
 - includes a decrypt method that shifts the string passed to it in the other direction based on the number used to create the instance
   - Both class methods use the string methods charCodeAt and fromCharCode to turn letters into their Unicode numbers and back
   - Unicode numbers make it easy to identify which characters are letters and to shift them by adding the number to be shifted

The Codecademy exercise specified that encryption would return an uppercase string and that decryption would return a lowercase string
## Setup
1. Copy and paste lines 1-39 of the code into your preferred REPL, such as [Node](https://nodejs.org), your browser console, or [REPL JS](https://repljs.com/).
2. Create a new instance of the ShiftCipher class with a number between 1 and 25 (26 would be the same as no shift). For example, `const shift4 = new ShiftCipher(4);`.
3. Call the encrypt method with the message you want to encrypt in the form of a string (e.g., `shift4.encrypt('Hail Caesar');` would return `"LEMP GEIWEV"`)
4. Call the decrypt method with an encrypted message to decrypt it (e.g., `shift4.encrypt('LEMP GEIWEV');` would return `"hail caesar"`)
