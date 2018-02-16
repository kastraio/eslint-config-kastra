module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", "always"],
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-param-reassign": "off",
    "react/display-name": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "prefer-destructuring": ["error", {"object": true, "array": false}]
  },
  "settings": {
    "import/resolver": {
      node: {
        moduleDirectory: [
          "src",
          "node_modules"
        ]
      }
    }
  }
}
