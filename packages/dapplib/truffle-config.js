require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain modify grace opinion sudden spring'; 
let testAccounts = [
"0x52cfa155325d886259c8a6857c1f9e36d97d4fd2c54351661c16eb9c3eb1c427",
"0x0a2a9b241b6aa828ba886adc3a067fdd856998840abb87b09874df1ca24927d0",
"0xa11304929a31ba73dc4b51e6a5328d8cd1692b49c91d3f10b35a65fe97dae63d",
"0xd6b8bd17270e138ecaded943b25ff8cef0b4cbc06e8bf627faec7ae1c1a410f5",
"0x9893d23f9ad58920edd99688703acf89ff8f630c097d9401cbd63ef4ec06e8ae",
"0x40da8306830732b586a58ddf29b35df31a118d9d39163b6118dcf1ed9a3e3c19",
"0x79bbfd5b6490bf2f19a9142e874807ca4d379eb5864872e79893384711962390",
"0x3f957a6c8987363b17b0dafde66caffed0b9ea48c052ec9ffe863de6b60cd363",
"0x049b3364f6732cc334dc5aebe3e6a117a2f7e2ac2c6aa1d472e2219ce6873f53",
"0x3158570d3c3f7dc57f6c256ae77d5079fbbb93dfdc76eb8d8548764fd0c0dd5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

