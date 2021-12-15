const crypto = require('crypto');
module.exports.KeyGenerator = class keyGenerator{

    GenerateKeyForHMAC(len)
    {
        var key =  crypto.generateKeySync('hmac',{length:len});
        return key.export().toString('hex');
    }


}