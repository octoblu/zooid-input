import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Input from '../src'

storiesOf('Input', module)
  .addWithInfo('Basic', 'A text input with no props provided', () => (
    <Input />
  ))
  .addWithInfo('With Label', 'A text input with an awesome label', () => (
    <Input label="Awesome Label" />
  ))
  .addWithInfo('With Placeholder', 'A text input with the placeholder provided', () => (
    <Input placeholder="You should use a placeholder :D" />
  ))
  .addWithInfo('Disabled', 'A disabled text input', () => (
    <Input disabled />
  ))
  .addWithInfo('Required', 'A required text input', () => (
    <Input required />
  ))
  .addWithInfo('Required With Label', 'The required text input with label', () => (
    <Input label="Name" required />
  ))
  .addWithInfo('Description', 'The standard input with help text added', () => (
    <Input label="Name" description="This text should help" />
  ))
  .addWithInfo('Show Help Text On Load', 'Toggles the help text to be shown', () => (
    <Input label="Name" description="This text should help" />
  ))
