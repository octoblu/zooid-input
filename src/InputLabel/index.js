import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  required: PropTypes.bool,
}

const defaultProps = {
  name: '',
}

const InputLabel = ({ children, name, required }) => {
  if (!children) return null

  let requiredIndicator = null
  if (required) requiredIndicator = ' *'

  return (
    <label
      htmlFor={name}
      className={styles.root}
    >
      {children}{requiredIndicator}
    </label>
 )
}

InputLabel.propTypes    = propTypes
InputLabel.defaultProps = defaultProps

export default InputLabel
