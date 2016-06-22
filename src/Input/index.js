import React, { PropTypes } from 'react'
import classNames from 'classnames'

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
    styles.Root,
    { [`${styles['is-disabled']}`]: disabled },
    { [`${styles['is-required']}`]: required },
    className
  )

  return (
    <div className={classes}>
      {label && <label htmlFor={name} className={styles.Label}>{label}</label>}
      <input
        {...props}
        className={styles.Input}
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
