let alphaNumericChar = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
let base = alphaNumericChar.length;

const encode = (data) => {
    let encoded = "";
    while (data) {
        let rem = data % base;
        data = Math.floor(data / base);
        console.log("alphaNumericChar[rem] ==> ", rem);
        encoded = alphaNumericChar[rem].toString() + encoded;
    }
    return encoded;
}

const decode = (data) => {
    let decoded = 0;
    while (data) {
        let index = alphaNumericChar.indexOf(data[0]);
        let power = data.length - 1;
        decoded += index * (Math.pow(base, power));
        data = data.substring(1);
    }
    return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;