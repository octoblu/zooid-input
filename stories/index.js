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
