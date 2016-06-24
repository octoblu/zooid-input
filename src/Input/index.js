import React, { PropTypes } from 'react'
import classNames from 'classnames'

import InputLabel from '../InputLabel/'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

const defaultProps = {
  disabled: false,
  name: '',
  required: false,
}

const Input = (props) => {
  const { className, disabled, label, name, placeholder, required } = props
  const classes = classNames(
    styles.root,
    { [`${styles['is-disabled']}`]: disabled },
    { [`${styles['is-required']}`]: required },
    className
  )

  return (
    <div className={classes}>
      <InputLabel name={name} required>{label}</InputLabel>

      <input
        {...props}
        className={styles.input}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={required}
        type="text"
      />
    </div>
  )
}

Input.propTypes    = propTypes
Input.defaultProps = defaultProps

export default Input
