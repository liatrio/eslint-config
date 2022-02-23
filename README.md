# eslint-config

Sharable ESLint config for Liatrio's JavaScript projects.

## Install

```bash
$ npm install @liatrio/eslint-config -D
```

```bash
$ yarn add @liatrio/eslint-config -D
```

## Usage

You can use this config by invoking it with the `extends` property:

_.eslintrc.js_
```js
module.exports = {
    extends: "@liatrio/eslint-config",
    rules: {
        // enable additional rules, or disable the rules you don't like
    },
};
```

_.eslintrc.yaml_
```yaml
extends:
  - "@liatrio/eslint-config"
rules:
  # enable additional rules, or disable the rules you don't like
```
