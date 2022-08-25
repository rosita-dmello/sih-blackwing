

var CryptoJS = require("crypto-js");

export const encryptedData = (data) => {
    var ciphertext = CryptoJS.AES
      .encrypt(JSON.stringify(data), "Blackwing")
      .toString();
    return {
        data: ciphertext
    }
}

export const decryptedData = (dataObject) => {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(dataObject.data, "Blackwing");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
    return decryptedData
}