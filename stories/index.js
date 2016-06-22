import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Input from '../src'

storiesOf('Input', module)
  .add('Basic', () => (
    <Input />
  ))
