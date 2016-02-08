# babel-plugin-transform-jsx-include-source

Adds source file to JSX elements. This plugin is a copy of [babel-plugin-transform-react-jsx-source](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source) with slightly different goals. 

## Example

###In

```
<sometag />
```
###Out

```
<sometag data-source={__jsxFileName}/>
```

## Installation

```sh
$ npm install babel-plugin-transform-jsx-include-source
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-jsx-include-source"]
}
```

### Via CLI

```sh
$ babel --plugins transform-jsx-include-source script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-jsx-include-source"]
});
```
