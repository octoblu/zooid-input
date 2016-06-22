import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

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
