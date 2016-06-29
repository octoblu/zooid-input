import React, { PropTypes } from 'react'

import Button from 'zooid-button'
import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  required: PropTypes.bool,
  helpText: PropTypes.string,
  showHelpText: PropTypes.func,
}

const defaultProps = {
  name: '',
}

const InputLabel = ({ children, helpText, name, required, showHelpText }) => {
  if (!children) return null

  let requiredIndicator = null
  let helpIndicator = null
  if (required) requiredIndicator = ' *'
  if (helpText) {
    helpIndicator = (<Button
      onClick={showHelpText}
      kind="no-style"
      size="small"
      className={styles.helpIndicator}
    >
        ?
    </Button>
  ) }

  return (<div>
    <label
      htmlFor={name}
      className={styles.root}
    >
      {children}{requiredIndicator}
    </label>
    {helpIndicator}
  </div>

 )
}

InputLabel.propTypes    = propTypes
InputLabel.defaultProps = defaultProps

export default InputLabel
