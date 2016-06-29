# zooid-input
A React component to render Zooid like text inputs.

### Install
```
npm install --save zooid-input
```
### Props
| Prop        | Type   | Default | Description                          |
| ----------- | -------| --------| -------------------------------------|
| className   | string |         | Additional css classes for your input|
| disabled    | bool   |         | Disables the text input              |
| label       | string |         | The label for the text input         |
| name        | string |   ' '   | name value for the input             |
| placeholder | string |         | placeholder text for the input box   |
| required    | bool   |         | Makes the text input required        |
| helpText    | string |         | Help text for the input field        |



### Example
```jsx
<Input name="inputName" placeholder="Input Text Here" label="Awesome Label" />
```
