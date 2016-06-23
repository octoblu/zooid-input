import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Input from '../src'

storiesOf('Input', module)
  .add('Basic', () => (
    <Input />
  ))
  .add('With Label', () => (
    <Input label="Awesome Label" />
  ))
  .add('With Placeholder', () => (
    <Input placeholder="You should use a placeholder :D" />
  ))
  .add('Disabled', () => (
    <Input disabled />
  ))
  .add('Required', () => (
    <Input required />
  ))
  .add('Required With Label', () => (
    <Input label="Name" required />
  ))
