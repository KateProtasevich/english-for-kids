module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended",
    "eslint-config-airbnb-base"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script"
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "no-plusplus": "off",
        "strict": ["error", "global"],
        
    }
};