# zooid-input
A React component to render Zooid like text inputs.

[![Build Status](https://travis-ci.org/octoblu/zooid-input.svg?branch=master)](https://travis-ci.org/octoblu/zooid-input)
[![npm version](https://badge.fury.io/js/zooid-input.svg)](http://badge.fury.io/js/zooid-input)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-input.png)](https://codeclimate.com/github/octoblu/zooid-input)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)


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
