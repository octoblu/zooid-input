# zooid-input
A React component to render Zooid like text inputs.

[![Build Status](https://travis-ci.org/octoblu/zooid-input.svg?branch=master)](https://travis-ci.org/octoblu/zooid-input)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-input/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-input)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-input.svg?style=flat)](https://david-dm.org/octoblu/zooid-input)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-input.svg?style=flat)](https://david-dm.org/octoblu/zooid-input#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-input.svg?style=flat)](https://npmjs.org/package/zooid-input)



### Install
```
npm install --save zooid-input
```
### Props
| Prop        | Type   | Default | Description                          |
| ----------- | -------| --------| -------------------------------------|
| className   | string |         | Additional css classes for your input|
| disabled    | bool   |  false  | Disables the text input              |
| label       | string |         | The label for the text input         |
| name        | string |   ' '   | name value for the input             |
| placeholder | string |         | placeholder text for the input box   |
| required    | bool   |  false  | Makes the text input required        |
| description    | string |         | Help text for the input field        |

### Example
```jsx
<Input name="inputName" placeholder="Input Text Here" label="Awesome Label" />
```
