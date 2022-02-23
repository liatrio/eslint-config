module.exports = {
    plugins: [
        "jest",
        "node",
        "security",
        "unicorn"
    ],
    extends: [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:security/recommended",
        "plugin:unicorn/recommended"
    ],
    rules: {
        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-bracket-spacing": "error",
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "camelcase": [
            "error",
            {
                "ignoreDestructuring": true,
                "ignoreImports": true,
                "properties": "never"
            }
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "curly": [
            "error",
            "all"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-call-spacing": "error",
        "function-paren-newline": "error",
        "func-style": [
            "error",
            "expression"
        ],
        "function-call-argument-newline": [
            "error",
            "consistent"
        ],
        "implicit-arrow-linebreak": "error",
        "indent": [
            "error",
            4
        ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": "error",
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-parens": "error",
        "no-await-in-loop": "error",
        "no-confusing-arrow": "error",
        "no-console": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-imports": [
            "error",
            {
                "includeExports": true
            }
        ],
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extra-parens": [
            "error",
            "all"
        ],
        "no-extra-semi": "error",
        "no-floating-decimal": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-param-reassign": "error",
        "no-prototype-builtins": "off",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable": "error",
        "no-unused-vars": [
            "error",
            {
                "args": "after-used",
                "vars": "all"
            }
        ],
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": [
            "error",
            "always",
        ],
        "object-property-newline": "error",
        "object-shorthand": "error",
        "one-var-declaration-per-line": "error",
        "padded-blocks": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return",
            },
            {
                "blankLine": "always",
                "prev": "block-like",
                "next": "*",
            }
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "quotes": "error",
        "rest-spread-spacing": [
            "error",
            "always"
        ],
        "semi": "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-function-paren": "error",
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "yoda": "error",
        "node/no-unsupported-features/es-syntax": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-useless-undefined": "off",
        "unicorn/prefer-object-from-entries": "off",
        "unicorn/prefer-ternary": "off"
    }
};
