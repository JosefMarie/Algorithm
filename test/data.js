// using crypto module
const crypto = require('crypto');
const fs = require('fs');

const keys= crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv('aes-256-cbc', keys, iv);

//function to encrypt data
const encryptData = (data) => {
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

//convert data to buffer
const data = Buffer.from('My name is ASHIMIRWE Joseph Marie work at KTSS.');
//encrypt the data
const encryptedData = encryptData(data);
console.log('Encrypted Data:', encryptedData);

//store the encrypted data in a file
fs.writeFileSync('encryptedData.txt', encryptedData, 'utf8');
console.log('Encrypted data has been stored in encryptedData.txt');

//function to decrypt data
const decryptData = (encryptedData) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', keys, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
const decryptedData = decryptData(encryptedData);
console.log('Decrypted Data:', decryptedData);
