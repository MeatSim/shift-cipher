class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(str) {
    let encrypted = '';
    let upperStr = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      let code = upperStr.charCodeAt(i);
      if (code > 64 && code < 91) {
        if (code + this.shift > 90) {
            code -= 26;
        }
        encrypted += (String.fromCharCode(code + this.shift));
      } else {
        encrypted += upperStr[i];
      }
    }
    return encrypted;
  }

  decrypt(str) {
    let decrypted = '';
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      let code = lowerStr.charCodeAt(i);
      if (code > 65 && code < 92) {
        if (code - this.shift < 66) {
          code += 26;
        }
        decrypted += (String.fromCharCode(code - this.shift));
      } else {
        decrypted += lowerStr[i];
      }
    }
    return decrypted;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('Z love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
console.log('Z'.charCodeAt(0));