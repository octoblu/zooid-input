import React, { PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
}
const defaultProps = {
  disabled: false,
  name: '',
  label: '',
}

const Input = ({ className, disabled, label, name, placeholder }) => {
  const classes = classNames(
    styles.Root,
    { [`${styles['is-disabled']}`]: disabled },
    className
  )
  return (
    <div className={classes}>
      <label htmlFor={name} className={styles.Label}>{label}</label>
      <input
        className={styles.Input}
        type="text"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        />
    </div>
    )
}

Input.propTypes    = propTypes
Input.defaultProps = defaultProps

export default Input
