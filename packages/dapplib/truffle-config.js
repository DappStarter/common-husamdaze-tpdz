require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue reflect still history hope cart future ski'; 
let testAccounts = [
"0x608d20aa837d703a43bc053f908a93f50fdc00f34914ca5075d7a3aa785b6823",
"0x294e9fca3761985a2c28f42210362230dae8a580c7d5272f03c97961b1d42ee9",
"0x7734055e8be84567b2478f79bf3214c6eb44b0f3924ac84294aada6f23895a1a",
"0xdf031ce2ef4de5ffb725b30a91c97664a9ac799e930dc1d24f0e1bcbd67c3ab2",
"0x2850ffbf29b97afde600a725f46d3f8ce903862900b61cb3e478782275d75e81",
"0x373c6c4d963639d890318a0a385526d46ccb29fc2829206bf8e0335501ea832b",
"0xbff64a83a8c2c9f3699c2f735868166a206d2e8fd132dd9e9e3cefe9502cec54",
"0xc64eb1be5f018aeb1f3a6f177f95d7214728a2ee474b2763af461a8390c8243b",
"0x03ac1e4b0ec5391c211891faf5e51a93ff5224fb058eb565a80cd0515779abf0",
"0x4a5a36e465568a5e361eedbe69632cb6f051c1b874231602f1355f27a372a2fe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

