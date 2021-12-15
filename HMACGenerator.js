const crypto = require('crypto');
module.exports.hmac = class HMACGenerator{

    GenerateHMAC(key, value)
    {
        let hmac = crypto.createHmac("sha3-256",key);
        hmac.update( value); 
        return hmac.digest("hex");
    }

}